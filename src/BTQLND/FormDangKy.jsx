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
    // console.log(newValue);

    let newErros = { ...this.state.errors }
    let errorsMsg = '';
    if (value.trim() == '') {
      // lỗi 
      errorsMsg = name + ' không để trống!'
    }

    // Kiểm tra email
    // Lấy giá trị của typeInput
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

    this.setState({
      values: newValue,
      errors: newErros
    })

  }

  hanldeSubmit = (event) => {
    event.preventDefault();
    let isValid = true;
    //Kiểm tra các lỗi còn không
    //key: tên thuộc tính 
    for (const key in this.state.errors) {
      if (this.state.errors[key] !== '') {
        // còn lỗi 
        isValid = false;
        //dừng duyệt đối tượng
        break;
      }
    }

    // kiểm tra dữ liệu rỗng khi không change Value
    for (const key in this.state.values) {
      if (this.state.values[key] === '') {
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
      nguoiDung: this.state.values
    }
    this.props.dispatch(action)
  }

  // static getDerivedStateFromProps(newProps, currentState) {
  //   // xử lý các code trước khi render UI
  //   // trường hợp chỉnh sửa gõ trên form thì cần đổi state của component => lấy this.state
  //   // trường hợp xem thôngg tin thì lên redux lấy nguoiDungChiTiet về lưu vào props
  //   //=> đem từ props lưu vào trong state 
  //   console.log('newProps', newProps)
  //   console.log('currentState', currentState)
  //   if (newProps.nguoiDungChiTiet.taiKhoan !== currentState.values.taiKhoan) {
  //     //? cần xem thông tin chi tiết
  //     return {
  //       ...currentState,
  //       values: newProps.nguoiDungChiTiet // lấy nguoiDungChiTiet lưu vào state
  //     }
  //   }
  //   //? ngược lại , cập nhật người dùng
  //   return currentState; // lấy dữ liệu từ từ form onChange lưu vào state (inputChange)
  // }

  componentWillReceiveProps(newProps){
    // chỉ chạy khi props thay đổi => xem chi tiết 
    this.setState({
      values: newProps.nguoiDungChiTiet
    })
  }

  render() {
    console.log(this.props)
    // let {taiKhoan,hoTen} = this.props.nguoiDungChiTiet
    let { taiKhoan, hoTen } = this.state.values
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
              <p className='text-danger'>{this.state.errors.taiKhoan}</p>
            </div>
            <div className="col-6 mb-5">
              <input onChange={(event) => {
                this.inputChange(event)
              }} value={hoTen} type="text" name='hoTen' className="form-control" placeholder="Họ Tên" />
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
              }} typeinput="email" type="text" name='email' className="form-control" placeholder="Email" />
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

const mapStateToProps = (rootReducer) => {
  return {
    nguoiDungChiTiet: rootReducer.QLNDReducer.nguoiDungChiTiet
  }
}



export default connect(mapStateToProps)(FormDangKy)
