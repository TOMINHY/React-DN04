import React, { Component } from 'react'

export default class TangGiamFont extends Component {

  //thuộc trính
  //fontState = 16; //number ( dễ tăng giảm giá trị )

  state = {
    fontState:16
  }
  changeFontSize = (num) => {
    this.setState({
      fontState: this.state.fontState + num
    })
  }

  //phương thức
  render() {
    return (
      <div className='container text-center mt-5'>
        <h2>TangGiamFont</h2>
        <button onClick={() => {
         this.changeFontSize(1);
        }} className='btn btn-success'>+</button>
        {/* <span style={{fontSize:'16px'}} className='mx-3'>Text cần tăng giảm</span> */}
        <span style={{fontSize:`${this.state.fontState}px`}} className='mx-3'>Text cần tăng giảm</span>
        <button onClick={() => {
           this.changeFontSize(-1);
        }} className='btn btn-danger'>-</button>
      </div>
    )
  }
}
