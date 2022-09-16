import React, { Component } from 'react'
import SanPham from './SanPham'

export default class DanhSachSP extends Component {


    renderPhoneList = () => {
        return this.props.phoneList.map((phone) => {
            return <div className="col-4 mb-5" key={`phone-${phone.maSP}`}>
              <SanPham phone={phone}/>
            </div>
        })
    }


    render() {
        return (
            <div className="row">
                {this.renderPhoneList()}
            </div>
        )
    }
}
