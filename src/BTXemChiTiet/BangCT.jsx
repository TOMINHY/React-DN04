import React, { Component } from 'react'

export default class BangCT extends Component {
    render() {
        let { chiTietPhone } = this.props
        return (
            <div className="row">
                <div className="col-4">
                    <h3>{chiTietPhone.tenSP}</h3>
                    <img className='img-fluid' src={chiTietPhone.hinhAnh} alt="" />
                </div>
                <div className="col-8">
                    <h2>Thông số kỹ thuật</h2>
                    <table className="table">
                        <thead>
                            <tr></tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td >Màn hình</td>
                                <td >{chiTietPhone.manHinh}</td>
                            </tr>
                            <tr>
                                <td >HĐH</td>
                                <td >{chiTietPhone.heDieuHanh}</td>
                            </tr>
                            <tr>
                                <td >Camera trước</td>
                                <td >{chiTietPhone.cameraTruoc}</td>
                            </tr>
                            <tr>
                                <td >Camera sau</td>
                                <td >{chiTietPhone.cameraSau}</td>
                            </tr>
                            <tr>
                                <td >RAM</td>
                                <td >{chiTietPhone.ram}</td>
                            </tr>
                            <tr>
                                <td >ROM</td>
                                <td >{chiTietPhone.rom}</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        )
    }
}
