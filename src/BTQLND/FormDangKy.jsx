import React, { Component } from 'react'
import { connect } from 'react-redux'

//C1: lưu giá trị từ form ở state của component
//C2: lưu giá trị từ form ở redux

class FormDangKy extends Component {

  //chứa giá trị tử form, chứa nội dung error
  state = {
    values: {
      taiKhoan: '',
      hoTen: '',
      matKhau: '',
      sdt: '',
      email: '',
      maLoaiND: 'khachHàng'
    },
    errors: {
      taiKhoan: '',
      hoTen: '',
      matKhau: '',
      sdt: '',
      email: '',
      maLoaiND: ''
    }
  }

  // valueForm = {}

  inputChange = (event) => {
    // console.log(event.target);
    // console.log(event.target.value, event.target.name);
    let { value, name } = event.target;
    // object literal
    // tổ chức lưu dữ liệu từ state
    let newValue = { ...this.state.values, [name]: value }
    console.log(newValue);

    let newErros = { ...this.state.errors }
    let errorsMsg = '';
    if (value.trim() == '') {
      // lỗi 
      errorsMsg = name + ' không để trống!'
    }
    //object.tenThuocTinh , object[tenThuocTinh]
    newErros[name] = errorsMsg

    this.setState({
      values: newValue,
      errors: newErros
    })

  }

  render() {
    return (
      <div className='py-5'>
        <form>
          <div className="row">
            <div className="col-6 mb-5">
              <input onChange={(event) => {
                this.inputChange(event)
              }} type="text" name='taiKhoan' className="form-control" placeholder="Tài Khoản" />
              <p className='text-danger'>{this.state.errors.taiKhoan}</p>
            </div>
            <div className="col-6 mb-5">
              <input onChange={(event) => {
                this.inputChange(event)
              }} type="text" name='hoTen' className="form-control" placeholder="Họ Tên" />
              <p className='text-danger'>{this.state.errors.hoTen}</p>
            </div>
            <div className="col-6 mb-5">
              <input onChange={(event) => {
                this.inputChange(event)
              }} type="password" name='matKhau' className="form-control" placeholder="Mật Khẩu" />
              <p className='text-danger'>{this.state.errors.matKhau}</p>
            </div>
            <div className="col-6 mb-5">
              <input onChange={(event) => {
                this.inputChange(event)
              }} type="text" name='sdt' className="form-control" placeholder="Số Điện Thoại" />
              <p className='text-danger'>{this.state.errors.sdt}</p>
            </div>
            <div className="col-6 mb-5">
              <input onChange={(event) => {
                this.inputChange(event)
              }} type="text" name='email' className="form-control" placeholder="Email" />
              <p className='text-danger'>{this.state.errors.email}</p>
            </div>
            <div className="col-6 mb-5">
              <select onChange={(event) => {
                this.inputChange(event)
              }} className="form-control" name="maLoaiND">
                <option value="khachHang">Khách Hàng</option>
                <option value="quanTri">Quản Trị Viên</option>
              </select>
              <p className='text-danger'>{this.state.errors.maLoaiND}</p>
            </div>
            <div className="col-12 text-center">
              <button className='btn btn-success mr-5'>Đăng Ký</button>
              <button className='btn btn-info'>Cập Nhật</button>
            </div>
          </div>
        </form>

      </div>
    )
  }
}

export default connect()(FormDangKy)
