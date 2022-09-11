import React, { Component } from 'react'

export default class HandlEvent extends Component {

  showName = () => {
    alert('Hello Mentor!')
  }

  showName2 = (name) => {
    //Truyền biến vào chuỗi String 
    alert(`Hello ${name}`)
  }

  render() {
    return (
      <div className='container'>
        {/* Chờ người dùng click button mới chạy hàm thì không có dấu () */}
        {/* {} : truyền dữ liệu vào thẻ JSX */}
        <button onClick={this.showName} className='btn btn-danger'>Click</button>
        {/* <button onClick={this.showName2.bind(this,"hihi")} className='btn btn-success'>Click có tham số</button> */}
        <button onClick={() => { 
            this.showName2("A HIHI");
            console.log('code 2');
         }} className='btn btn-success'>Click có tham số</button>
      </div>
    )
  }
}
//C1: bind()
// function showName2(name){
//     return function (){
//         console.log(name);
//     }
// }
// let result = showName2();

