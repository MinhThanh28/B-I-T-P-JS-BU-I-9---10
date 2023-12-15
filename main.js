var dsnv = new DSNV();
const validation = new Validation();
function getEle(id) {
  return document.getElementById(id);
}

function layThongTinNhanVien(isAdd) {
  // dom tới các thẻ input lấy value
  const txtTaiKhoan = getEle("tknv").value;
  const txtHoTen = getEle("name").value;
  const txtEmail = getEle("email").value;
  const txtMatKhau = getEle("password").value;
  const txtNgayLam = getEle("datepicker").value;
  const txtLuongCB = getEle("luongCB").value;
  const txtChucVu = getEle("chucvu").value;
  const txtGiolam = getEle("gioLam").value;
  // flag
  var isValid = true;
  // validation taiKhoan
  if (isAdd) {
    isValid &=
      validation.kiemTraRong(
        txtTaiKhoan,
        "tbTKNV",
        "(*) Tài khoản không được để trống"
      ) &&
      validation.kiemTraDoDaiKyTu(
        txtTaiKhoan,
        "tbTKNV",
        "(*) Độ dài ký tự từ 4 - 6",
        4,
        6
      );
  }
  // validation họ tên
  isValid &=
    validation.kiemTraRong(
      txtHoTen,
      "tbTen",
      "(*) Họ tên không được để trống"
    ) &&
    validation.kiemTraChuoiKiTu(txtHoTen, "tbTen", "(*) Họ tên không hợp lệ");
  // validation email
  isValid &=
    validation.kiemTraRong(
      txtEmail,
      "tbEmail",
      "(*) Email không được để trống"
    ) && validation.kiemTraEmail(txtEmail, "tbEmail", "(*) Email không hợp lệ");
  // validation mật khẩu độ dài từ 6 - 10 ký tự
  isValid &=
    validation.kiemTraRong(
      txtMatKhau,
      "tbMatKhau",
      "(*) Mật khẩu không được để trống"
    ) &&
    validation.kiemTraDoDaiKyTu(
      txtMatKhau,
      "tbMatKhau",
      "(*) Độ dài ký tự từ 6 - 10",
      6,
      10
    ) &&
    validation.kiemTraMatKhau(
      txtMatKhau,
      "tbMatKhau",
      "(*) Mật khẩu không hợp lệ chứa ít nhất 1 chữ hoa, 1 số, 1 ký tự đặc biệt"
    );
  // validation ngày làm
  isValid &=
    validation.kiemTraRong(
      txtNgayLam,
      "tbNgay",
      "(*) Ngày làm không được để trống"
    ) &&
    validation.kiemTraNgayLam(
      txtNgayLam,
      "tbNgay",
      "(*) Ngày làm không đúng định dạng mm/dd/yyyy"
    );
  // validation lương cơ bản
  isValid &=
    validation.kiemTraRong(
      txtLuongCB,
      "tbLuongCB",
      "(*) Lương cơ bản không được để trống"
    ) &&
    validation.kiemTraLuongCB(
      txtLuongCB,
      "tbLuongCB",
      "(*) Lương cơ bản từ 1.000.000 - 20.000.000"
    );
  // validation chức vụ
  isValid &= validation.kiemTraChucVu(
    txtChucVu,
    "tbChucVu",
    "(*) Vui lòng chọn chức vụ"
  );
  // validation giờ làm
  isValid &= validation.kiemTraGioLam(
    txtGiolam,
    "tbGiolam",
    "(*) Vui lòng nhập giờ làm từ 80 - 200 giờ"
  );
  if (!isValid) return;
  // tạo đối tượng nhân viên từ lớp đối tượng nhân viên
  const nhanVien = new NhanVien(
    txtTaiKhoan,
    txtHoTen,
    txtEmail,
    txtMatKhau,
    txtNgayLam,
    txtLuongCB,
    txtChucVu,
    txtGiolam
  );
  // gọi phương thức tính tổng lương
  nhanVien.tinhTongLuong();
  // gọi phương thức xếp loại nhân viên
  nhanVien.xepLoaiNhanVien();
  return nhanVien;
}

function renderUI(data) {
  let content = "";
  for (let i = 0; i < data.length; i++) {
    const nhanVien = data[i];
    content += `
            <tr>
                <td>${nhanVien.taiKhoan}</td>
                <td>${nhanVien.hoTen}</td>
                <td>${nhanVien.email}</td>
                <td>${nhanVien.ngayLam}</td>
                <td>${nhanVien.chucVu}</td>
                <td>${nhanVien.tongLuong}</td>
                <td>${nhanVien.loaiNhanVien}</td>
                <td>
                    <button class="btn btn-info" data-toggle="modal" data-target="#myModal" onclick="suaNhanVien('${nhanVien.taiKhoan}')">Sửa</button>
                    <button class="btn btn-danger" onclick="xoaNhanVien('${nhanVien.taiKhoan}')">Xóa</button>
                </td>
            </tr>
        `;
  }
  getEle("tableDanhSach").innerHTML = content;
}

function handleThemNV() {
  const nhanVien = layThongTinNhanVien(true);
  if (!nhanVien) return;
  dsnv.themNhanVien(nhanVien);
  renderUI(dsnv.arr);
  setLocalStorage();
}

function xoaNhanVien(taiKhoan) {
  dsnv.xoaNhanVien(taiKhoan);
  renderUI(dsnv.arr);
  setLocalStorage();
}

function suaNhanVien(taiKhoan) {
  const nhanVien = dsnv.layThongTinNhanVien(taiKhoan);
  if (!nhanVien) return;
  getEle("tknv").value = nhanVien.taiKhoan;
  getEle("tknv").disabled = true;
  getEle("name").value = nhanVien.hoTen;
  getEle("email").value = nhanVien.email;
  getEle("password").value = nhanVien.matKhau;
  getEle("datepicker").value = nhanVien.ngayLam;
  getEle("luongCB").value = nhanVien.luongCoBan;
  getEle("chucvu").value = nhanVien.chucVu;
  getEle("gioLam").value = nhanVien.gioLamTrongThang;
}

function handleCapNhatNV() {
  const nhanVien = layThongTinNhanVien(false);
  if (!nhanVien) return;
  dsnv.capNhatNhanVien(nhanVien);
  renderUI(dsnv.arr);
  setLocalStorage();
}

getEle("searchName").addEventListener("keyup", function () {
  const keyword = getEle("searchName").value;
  const mangTimKiem = dsnv.timKiemNhanVien(keyword);
  renderUI(mangTimKiem);
});

function setLocalStorage() {
  // chuyển đổi dữ liệu từ kiểu json sang kiểu string
  const arrString = JSON.stringify(dsnv.arr);
  // lưu xuống localStorage
  localStorage.setItem("DSNV", arrString);
}
function getLocalStorage() {
  // lấy dữ liệu từ localStorage
  const data = localStorage.getItem("DSNV");
  // chuyển đổi dữ liệu từ kiểu string sang kiểu json
  dsnv.arr = JSON.parse(data);
  renderUI(dsnv.arr);
}
getLocalStorage();