function DSNV(){
    // arr chứa nhiều đối tượng nhân viên
    this.arr = [];

    this.themNhanVien = function(nhanVien){
        this.arr.push(nhanVien);
    }

    this.timViTri = function(taiKhoan){
        var viTri = -1;
        for(var i = 0; i < this.arr.length; i++){
            if(this.arr[i].taiKhoan === taiKhoan){
                viTri = i;
                break;
            }
        }
        return viTri;
    }

    this.xoaNhanVien = function(taiKhoan){
        var viTri = this.timViTri(taiKhoan);
        if(viTri >= 0){
            this.arr.splice(viTri, 1);
        }
    }

    this.layThongTinNhanVien = function(taiKhoan){
        var viTri = this.timViTri(taiKhoan);
        if(viTri >= 0){
            return this.arr[viTri];
        }
    }

    this.capNhatNhanVien = function(nhanVien){
        var viTri = this.timViTri(nhanVien.taiKhoan);
        if(viTri >= 0){
            this.arr[viTri] = nhanVien;
        }
    }

    // tìm kiếm nhân viên theo loại: xuất sắc, giỏi, khá, trung bình
    this.timKiemNhanVien = function(keyword){
        var mangTimKiem = [];
        for(var i = 0; i < this.arr.length; i++){
            var nhanVien = this.arr[i];
            if(nhanVien.loaiNhanVien.toLowerCase().indexOf(keyword.toLowerCase()) !== -1){
                mangTimKiem.push(nhanVien);
            }
        }
        return mangTimKiem;
    }
}