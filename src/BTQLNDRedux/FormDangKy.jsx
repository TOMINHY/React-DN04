import React, { Component } from 'react'
import { connect } from 'react-redux'

//C2: lưu giá trị từ form ở redux

class FormDangKy extends Component {

  inputChange = (event) => {
    let { value, name } = event.target;
    // object literal
    let newValue = { ...this.props.nguoiDung.values, [name]: value }
    // console.log(newValue);

    let newErros = { ...this.props.nguoiDung.errors }
    let errorsMsg = '';
    if (value.trim() == '') {
      // lỗi 
      errorsMsg = name + ' không để trống!'
    }
    // Kiểm tra email
    // Lấy giá trị của typeinput
    let typeVal = event.target.getAttribute('typeinput');
    if (typeVal == 'email') {
      // kiểm tra email
      let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

      if (!regex.test(value)) {
        // không hợp lệ 
        errorsMsg = 'Email không đúng định dạng !'
      }
    }
    //object.tenThuocTinh , object[tenThuocTinh]
    newErros[name] = errorsMsg

    //đẩy giá trị từ form và thông báo lỗi về redux
    let action = {
      type:'HANDLE_CHANGE',
      nguoiDung:{
        values: newValue,
        errors:newErros
      }
    }
    this.props.dispatch(action)
  }

  hanldeSubmit = (event) => {
    event.preventDefault();
    let isValid = true;
    //Kiểm tra các lỗi còn không
    //key: tên thuộc tính 
    for (const key in this.props.nguoiDung.errors) {
      if (this.props.nguoiDung.errors[key] !== '') {
        // còn lỗi 
        isValid = false;
        //dừng duyệt đối tượng
        break;
      }
    }

    // kiểm tra dữ liệu rỗng khi không change Value
    for (const key in this.props.nguoiDung.values) {
      if (this.props.nguoiDung.values[key] === '') {
        // giá trị rỗng  
        isValid = false;
        //dừng duyệt đối tượng
        break;
      }
    }

    if (!isValid) {
      // không hợp lệ thì thông báo 
      alert('Dữ liệu không hợp lệ');
      //dừng hàm 
      return;
    }
    //Đẩy dữ liệu người dùng lên redux
    let action = {
      type: 'THEM_ND',
      nguoiDung: this.props.nguoiDung.values
    }
    this.props.dispatch(action)
  }

  render() {
    console.log(this.props)
    let {taiKhoan,hoTen,matKhau,sdt,email,maLoaiND} = this.props.nguoiDung.values
    return (
      <div className='py-5'>
        <form onSubmit={(event) => {
          this.hanldeSubmit(event)
        }}>
          <div className="row">
            <div className="col-6 mb-5">
              <input onChange={(event) => {
                this.inputChange(event)
              }} value={taiKhoan} type="text" name='taiKhoan' className="form-control" placeholder="Tài Khoản" />
              <p className='text-danger'>{this.props.nguoiDung.errors.taiKhoan}</p>
            </div>
            <div className="col-6 mb-5">
              <input onChange={(event) => {
                this.inputChange(event)
              }} value={hoTen} type="text" name='hoTen' className="form-control" placeholder="Họ Tên" />
              <p className='text-danger'>{this.props.nguoiDung.errors.hoTen}</p>
            </div>
            <div className="col-6 mb-5">
              <input onChange={(event) => {
                this.inputChange(event)
              }} value={matKhau} type="password" name='matKhau' className="form-control" placeholder="Mật Khẩu" />
              <p className='text-danger'>{this.props.nguoiDung.errors.matKhau}</p>
            </div>
            <div className="col-6 mb-5">
              <input onChange={(event) => {
                this.inputChange(event)
              }} value={sdt} type="text" name='sdt' className="form-control" placeholder="Số Điện Thoại" />
              <p className='text-danger'>{this.props.nguoiDung.errors.sdt}</p>
            </div>
            <div className="col-6 mb-5">
              <input onChange={(event) => {
                this.inputChange(event)
              }} value={email} typeinput="email" type="text" name='email' className="form-control" placeholder="Email" />
              <p className='text-danger'>{this.props.nguoiDung.errors.email}</p>
            </div>
            <div className="col-6 mb-5">
              <select value={maLoaiND} onChange={(event) => {
                this.inputChange(event)
              }}  className="form-control" name="maLoaiND">
                <option value="khachHang">Khách Hàng</option>
                <option value="quanTri">Quản Trị Viên</option>
              </select>
              <p className='text-danger'>{this.props.nguoiDung.errors.maLoaiND}</p>
            </div>
            <div className="col-12 text-center">
              <button className='btn btn-success mr-5'>Đăng Ký</button>
              <button type='button' onClick={()=>{
                let action ={
                  type:'CAP_NHAT',
                  nguoiDungCapNhat:this.props.nguoiDung.values
                }
                this.props.dispatch(action)
              }} className='btn btn-info'>Cập Nhật</button>
            </div>
          </div>
        </form>

      </div>
    )
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    nguoiDung: rootReducer.QLNDReducer.nguoiDung
  }
}



export default connect(mapStateToProps)(FormDangKy)