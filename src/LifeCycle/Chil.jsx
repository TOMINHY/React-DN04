import React, { Component } from 'react'

export default class Chil extends Component {

    constructor(props) {

        super(props)
        this.state = {

        }
        this.checkTime = () => {
        }
        console.log('constructor Chil')
    }
    static getDerivedStateFromProps(newProps, currentState) {
        console.log('getDerivedStateFromProps Chil')
        return null;
    }

    shouldComponentUpdate(newProps, newState) {
        console.log('shouldComponentUpdate Chil')
        // return true => cho phép render lại UI
        // ngược lại false => không render lại UI (những component chứa thông tin ít thay đổi => không render lại - footer)
        // return false

        //render theo điều kiện

        // newProps giá trị mới của props
        console.log('newProps', newProps)
        // this.props hiện tại của props
        console.log('this.props', this.props)
        if (newProps.like !== this.props.like) {
            // có sự thay đổi => render lại UI
            return true
        } else {
            // giá trị không đổi => không render UI
            return false
        }
    }

    render() {
        // this.props được cập nhật giá trị mới 
        console.log('this.props render', this.props)
        console.log('render Chil')

        return (
            <footer>
                <p>footer</p>
            </footer>
        )
    }

    componentDidMount() {  
        this.checkTime = setInterval(() => {
            console.log('Check time sau 2s')
        }, 2000)
        console.log('componentDidMount Chil');
    }

    componentDidUpdate() {

        console.log('componentDidUpdate Chil')
    }

    componentWillUnmount() {
        // xử lý nghiệp vụ thông báo cho user trước khi chuyển trang hoặc ẩn component
        // các API chạy ngầm => thường xuyên cập nhật lấy dữ liệu mới về (5s cập nhật 1 lần)
        // xử lý tắt các API chạy ngầm không cần thiết => khi không còn cần dùng đến compontent đó 
        clearInterval(this.checkTime)
        console.log('componentWillUnmount')
    }
}
