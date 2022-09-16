import React, { Component } from 'react'

export default class DemoState extends Component {

    // Tạo 1 biến chứa trạng thái đăng nhập
    // Tạo hàm kiểm tra khi click button Login => đổi giá trị isLogin sang true
    // Kiểm tra : nếu là true => đã đăng nhập => header hiển thị tên username
    // Ngược lại hiển thị button login

    // isLogin = false // chưa đăng nhập

    // Chuyển giá trị cần đổi  vào State(thuộc tính có sẵn của RCC)
    state = {
        isLogin:false
    }
    //phương thực kiểm tra đăng nhập
    checkLogin = () => {
        if (this.state.isLogin) {
            return <p className='text-white'>Nguyễn Thị Khách Hàng</p>
        }
        return <button onClick={() => {
            //click đổi isLogin thành true => UI sẽ load lại và hiển thị tên client
            //    this.isLogin = true;
            //    console.log(this.isLogin);
            // load lại UI
            // this.render(); //! hàm render chỉ chỉ 1 lần khi load ứng dụng
            // để đổi được giá trị và render lại UI khi giá trị thay đổi  => State

            //Xét giá trị mới cho isLogin(state) và renderlại UI
            this.setState({
                //tham số thứ 2 của setState giúp xử lý các nghiệp vụ sau khi state đã được thay đổi
                isLogin: true
            })
           // this.setState({giá trị mới của state},{callbalck function})
           //nếu đặt clg bên dưới state sẽ bị sai kết quả thông báo do bất đồng bộ dữ liệu
        }} className='btn btn-success'>Login</button>
    }

    render() {
        return (
            <div className='container'>
                <nav className="navbar navbar-dark bg-dark">
                    <span className="navbar-brand mb-0 h1">Navbar</span>
                    <div>
                        {/* Hiển thị button login hoặc username */}
                        {this.checkLogin()};
                    </div>
                </nav>
            </div>

        )
    }
}
