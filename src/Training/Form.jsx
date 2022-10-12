import React, { Component } from 'react'
import { connect } from 'react-redux'



class Form extends Component {

    inputChange = (event) => {
        let { value, name } = event.target
        let newValue = { ...this.props.nguoiDung.values, [name]: value }
        let newError =  { ...this.props.nguoiDung.errors}
        let errorsMsg = '';
        if(value.trim() == ""){
            // lỗi 
            errorsMsg = name + ' không được để trống !'
        }
        // kiểm tra email 
        let typeVal = event.target.getAttribute('typeinput');

        if(typeVal == "email"){
            let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if(!regex.test(value)){
                // không hợp lệ 
                errorsMsg = 'Email không đúng định dạng'
            }
        }
        newError[name] = errorsMsg
        // đẩy giá trị từ form lên redux và thông báo lỗi 
        let action ={
            type:'HANDLE_CHANGE',
            nguoiDung:{
                values: newValue,
                errors: newError
            }
        }
        this.props.dispatch(action)

    }
    handleSubmit = (event) => {
        event.preventDefault();
        let isVal = true;
        for (const key in this.props.nguoiDung.errors) {
            if(this.props.nguoiDung.errors[key] !== ""){
                isVal = false;
                break;
            }
        }
        for (const key in this.props.nguoiDung.values) {
            if(this.props.nguoiDung.values[key] === ""){
                isVal = false;
                break;
            }
        }
        if(!isVal){
            // Dữ liệu không hợp lệ
            alert('Dữ liệu không hợp lệ !')
            // dừng hàm
            return
        }

        let action ={
            type:'THEM_ND',
            nguoiDung: this.props.nguoiDung.values
        }
        this.props.dispatch(action)
    }

    render() {
        console.log(this.props)
        return (
            <div className='py-5'>
                <form onSubmit={(event)=>{
                    this.handleSubmit(event)
                }}>
                    <div className="row">
                        <div className="col-6 mb-5">
                            <input onChange={(event) => {
                                this.inputChange(event)
                            }} type="text" name='taiKhoan' className='form-control' placeholder='Tài khoản' />
                            <p className='text-danger'>{this.props.nguoiDung.errors.taiKhoan}</p>
                        </div>
                        <div className="col-6 mb-5">
                            <input onChange={(event) => {
                                this.inputChange(event)
                            }} type="text" name='hoTen' className='form-control' placeholder='Họ Tên' />
                            <p className='text-danger'>{this.props.nguoiDung.errors.hoTen}</p>
                        </div>
                        <div className="col-6 mb-5">
                            <input onChange={(event) => {
                                this.inputChange(event)
                            }} type="password" name='matKhau' className='form-control' placeholder='Mật khẩu' />
                            <p className='text-danger'>{this.props.nguoiDung.errors.matKhau}</p>
                        </div>
                        <div className="col-6 mb-5">
                            <input onChange={(event) => {
                                this.inputChange(event)
                            }} type="text" name='sdt' className='form-control' placeholder='SĐT' />
                            <p className='text-danger'>{this.props.nguoiDung.errors.sdt}</p>
                        </div>
                        <div className="col-6 mb-5">
                            <input onChange={(event) => {
                                this.inputChange(event)
                            }} typeinput="email" type="text" name='email' className='form-control' placeholder='Email' />
                            <p className='text-danger'>{this.props.nguoiDung.errors.email}</p>
                        </div>
                        <div className="col-6 mb-5">
                            <select onChange={(event) => {
                                this.inputChange(event)
                            }} name='maLoaiND' className='form-control'>
                                <option value="khachHang">Khách Hàng</option>
                                <option value="quanTri">Quản Trị Viên</option>
                            </select>
                            <p className='text-danger'>{this.props.nguoiDung.errors.maLoaiND}</p>
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
      nguoiDung: rootReducer.QLNDReducer.nguoiDung
    }
  }



export default connect(mapStateToProps)(Form)
