import React, { Component } from 'react'
import Chil from './Chil'

export default class LiCycleParent extends Component {

    constructor(props) {
        // Khởi tạo props ,state, thuộc tính của component
        // state là thuộc tính riêng của mỗi component
        super(props)
        this.state = {
            number: 0,
            like: 0
        }
        console.log('constructor')
    }

    // static: phương thức tĩnh => gọi phương thức mà không cần thông qua instance (thể hiện của lớp) 
    // VD:  SinhVien.TenPhuongThucTinh
    static getDerivedStateFromProps(newProps, currentState) {
        // xử lý các code trước khi render UI
        console.log('getDerivedStateFromProps')
        return null;
    }

    shouldComponentUpdate(newProps, newState) {
        console.log('shouldComponentUpdate')
        return true

    }




    render() {
        console.log('render')
        return (
            <div className='container py-5'>LiCycleParent
                <p>{this.state.number}</p>
                <button onClick={() => {
                    this.setState({
                        number: this.state.number + 1
                    })
                }} className='btn btn-danger p-5'>+</button>

                <p>{this.state.like}</p>
                <button onClick={() => {
                    this.setState({
                        like: this.state.like + 1
                    })
                }} className='btn btn-success p-4'>Tăng like</button>

                {this.state.number > 2 ? "" : <Chil numer={this.state.number} like={this.state.like} />}


                
            </div>

        )
    }

    componentDidMount() {
        // xử lý các code cần chạy sau khi render được UI
        // VD: dùng các thư viện count up, slick carousel để gắn thư viện sau khi UI đã load xong
        console.log('componentDidMount');
    }

    componentDidUpdate() {
        // xử lý các code cần chạy sau khi render được UI
        // VD: dùng các thư viện count up, slick carousel để gắn thư viện sau khi UI đã load xong
        console.log('componentDidUpdate')
    }



}
