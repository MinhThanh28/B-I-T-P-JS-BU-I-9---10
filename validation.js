function Validation() {
  this.kiemTraRong = function (value, spanId, mess) {
    if (value === "") {
      getEle(spanId).innerHTML = mess;
      return false;
    }
    getEle(spanId).innerHTML = "";
    return true;
  };
  this.kiemTraDoDaiKyTu = function (value, spanId, mess, min, max) {
    if (value.length >= min && value.length <= max) {
      getEle(spanId).innerHTML = "";
      return true;
    }
    getEle(spanId).innerHTML = mess;
    return false;
  };
  this.kiemTraChuoiKiTu = function (value, spanId, mess) {
    const letter =
      "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
      "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
      "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
    if (value.match(letter)) {
      getEle(spanId).innerHTML = "";
      return true;
    }
    getEle(spanId).innerHTML = mess;
    return false;
  };
  this.kiemTraEmail = function (value, spanId, mess) {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (value.match(reg)) {
      getEle(spanId).innerHTML = "";
      return true;
    }
    getEle(spanId).innerHTML = mess;
    return false;
  };
  // kiểm tra mật khẩu chứa ít nhất 1 chữ hoa, 1 số, 1 ký tự đặc biệt
    this.kiemTraMatKhau = function (value, spanId, mess) {
        const reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{6,8}$/;
        if (value.match(reg)) {
        getEle(spanId).innerHTML = "";
        return true;
        }
        getEle(spanId).innerHTML = mess;
        return false;
    };
  // kiểm tra ngày làm định dạng mm/dd/yyyy
    this.kiemTraNgayLam = function (value, spanId, mess) {
        const reg = /^\d{2}\/\d{2}\/\d{4}$/;
        if (value.match(reg)) {
        getEle(spanId).innerHTML = "";
        return true;
        }
        getEle(spanId).innerHTML = mess;
        return false;
    };
    // kiểm tra lương cơ bản từ 1.000.000 - 20.000.000
    this.kiemTraLuongCB = function (value, spanId, mess) {
        const reg = /^[1-9]{1}[0-9]{6,9}$/;
        if (value.match(reg)) {
        getEle(spanId).innerHTML = "";
        return true;
        }
        getEle(spanId).innerHTML = mess;
        return false;
    };
    // kiểm tra chức vụ hợp lệ (Giám đốc, Trưởng phòng, Nhân viên)
    this.kiemTraChucVu = function (value, spanId, mess) {
        if (value === "") {
        getEle(spanId).innerHTML = mess;
        return false;
        }
        getEle(spanId).innerHTML = "";
        return true;
    };
    // kiểm tra giờ làm từ 80 - 200
    this.kiemTraGioLam = function (value, spanId, mess) {
        if (value >= 80 && value <= 200) {
        getEle(spanId).innerHTML = "";
        return true;
        }
        getEle(spanId).innerHTML = mess;
        return false;
    }
}
