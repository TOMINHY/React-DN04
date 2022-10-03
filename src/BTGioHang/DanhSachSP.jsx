import React, { Component } from 'react'
import SanPham from './SanPham'

export default class DanhSachSP extends Component {

  renderProList = () => {
    return this.props.phoneList.map((phone) => {
        return <div className="col-4" key={`cart-${phone.maSP}`}>
            <SanPham addToCart={this.props.addToCart} phone={phone}/>
        </div>
    })
}


  render() {
    return (
      <div className="row py-5">
        {this.renderProList()}
      </div>

    )
  }
}
