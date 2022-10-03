import React, { Component } from 'react'

export default class SanPham extends Component {
  render() {
    let {phone,addToCart} = this.props
    return (
      <div style={{ height: "100%" }} className="card">
      <img className="card-img-top" src={phone.hinhAnh} alt="" />
      <div className="card-body">
          <h4 className="card-title">{phone.tenSP}</h4>
          <p className="card-text">{phone.giaBan}</p>
          <button onClick={() => {
              addToCart(phone)
          }} data-toggle="modal" data-target="#modelId" className='btn btn-primary'>Thêm giỏ hàng</button>
      </div>
  </div>
    )
  }
}
