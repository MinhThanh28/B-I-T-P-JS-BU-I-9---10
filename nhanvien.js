/**
 * đối tượng nhân viên bao gồm các thuộc tính sau: tài khoản, họ tên, email, mật khẩu, ngày làm, lương cơ bản, chức vụ gồm: giám đốc, truởng phòng, nhân viên, giờ làm trong tháng, tổng lương, loại nhân viên
 */
function NhanVien(
  _taiKhoan,
  _hoTen,
  _email,
  _matKhau,
  _ngayLam,
  _luongCoBan,
  _chucVu,
  _gioLamTrongThang
) {
  this.taiKhoan = _taiKhoan;
  this.hoTen = _hoTen;
  this.email = _email;
  this.matKhau = _matKhau;
  this.ngayLam = _ngayLam;
  this.luongCoBan = _luongCoBan;
  this.chucVu = _chucVu;
  this.gioLamTrongThang = _gioLamTrongThang;
  this.tongLuong = 0;
  this.loaiNhanVien = "";

  /**
   * phương thức tính tổng lương của nhân viên
   * nếu chức vụ là giám đốc: tổng lương = lương cơ bản * 3
   * nếu chức vụ là trưởng phòng: tổng lương = lương cơ bản * 2
   * nếu chức vụ là nhân viên: tổng lương = lương cơ bản * 1
   */
  this.tinhTongLuong = function () {
    if (this.chucVu === "Giám đốc") {
      this.tongLuong = this.luongCoBan * 3;
    } else if (this.chucVu === "Trưởng phòng") {
      this.tongLuong = this.luongCoBan * 2;
    } else {
      this.tongLuong = this.luongCoBan * 1;
    }
  };

  /**
   * phương thức xếp loại nhân viên
   * nếu nhân viên có giờ làm >= 192: nhân viên xuất sắc
   * nếu nhân viên có giờ làm >= 176: nhân viên giỏi
   * nếu nhân viên có giờ làm >= 160: nhân viên khá
   * nếu nhân viên có giờ làm < 160: nhân viên trung bình
   */

  this.xepLoaiNhanVien = function () {
    if (this.gioLamTrongThang >= 192) {
      this.loaiNhanVien = "Xuất sắc";
    } else if (this.gioLamTrongThang >= 176) {
      this.loaiNhanVien = "Giỏi";
    } else if (this.gioLamTrongThang >= 160) {
      this.loaiNhanVien = "Khá";
    } else {
      this.loaiNhanVien = "Trung bình";
    }
  };
}
