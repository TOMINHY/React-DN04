import React, { Component } from 'react'
import DanhSachSP from './DanhSachSP'
import GioHang from './GioHang'

export default class BTGioHang extends Component {

    phoneList = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/phone/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/phone/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/phone/applephone.jpg" }
    ]

    //khai báo state
    state = {
        gioHang: []
    }

    //input: thông tin sản phẩm đang được click
    //Output: sản phẩm được thêm vào mảng gioHang

    addToCart = (spClick) => {
        console.log(spClick)// chưa có số lượng
        let gioHangMoi = [...this.state.gioHang]


        // tìm sản phẩm trong giỏ hàng có mã trùng với mã spClick
        //find : trả về đối tượng, findIndex trả về vị trí phần tử 
        // let spFind = this.state.gioHang.find((spGH) => spClick.maSP === spGH.maSP)

        //điều kiện tìm kiếm
        let spFind = this.state.gioHang.find((spGH) => {
            //điều kiện tìm kiếm
            return spClick.maSP === spGH.maSP
        })

        // nếu sản phẩm cần thêm đã tồn tại (dựa vào maSP) trong giỏ hàng thì chỉ được tăng số lượng 
        // nếu chưa tồn tại thì thêm một hàng sản phẩm mới
        if (spFind) {
            //nếu tìm thấy => đã có trong giỏ hàng
            // số lượng mới = số lượng ban đầu + 1
            spFind.soLuong = spFind.soLuong + 1
        } else {
            //coppy thuộc tình của spClick và thêm thuộc tính mới soLuong
            let spGHMoi = { ...spClick, soLuong: 1 }

            //gioHangMoi : chứa sản phẩm giỏ hàng cũ và thêm sản phẩm spGHMoi
            gioHangMoi = [...gioHangMoi, spGHMoi]

        }

        this.setState({
            //lưu vào state mảng giỏ hàng mới (chứa các sản phẩm mới thêm)
            gioHang: gioHangMoi
        })
    }

    removeCart = (maXoa) => {
        console.log(maXoa)
        let gioHangCapNhat = [...this.state.gioHang]
        //tìm được vị trí phần tử cần xóa trong giỏ hàng findIndex
        //splice => xóa phần tử theo vị trí

        //tìm không thấy => trả về - 1

        // let indexXoa = gioHangCapNhat.findIndex((spGH) => {
        //     return spGH.maSP === maXoa
        // })
        // if (indexXoa > -1) {
        //     // tìm thấy
        //     gioHangCapNhat.splice(indexXoa, 1)
        // }

        //? Lọc ra các mã sản phẩm có mã sản phẩm khác với sản phẩm cần xóa
        //? fillter trả về mảng mới không chứa sản phẩm cần xóa
        gioHangCapNhat = gioHangCapNhat.filter((spGH) => {
            return spGH.maSP !== maXoa;
        })

        this.setState({
            gioHang: gioHangCapNhat
        })
    }

    changeSL = (maSP, sl) => {
        let gioHangCapNhat = [...this.state.gioHang]
        let spFind = gioHangCapNhat.find((spGH) => {
            return spGH.maSP === maSP
        })

        if (spFind) {
            // số lượng mới = số lượng ban đầu + 1 hoặc số lượng ban đầu + (-1)
            spFind.soLuong = spFind.soLuong + sl

            if (spFind.soLuong < 1) {
                alert('Số lượng tối thiểu là 1')
                // 0 - (-1) = 0 + 1  => 1
                spFind.soLuong = spFind.soLuong - sl
            }
        }
        this.setState({
            gioHang: gioHangCapNhat
        })
    }
    tinhTongSL = () => {
        //? reduce ( (kết quả, từng phần tử , vị trí phần tử)=>{}, giá trị khởi tạo) : duyệt mảng, dựa vào công thức tính toán 
        // return 1 kết quả tính toán 
        let tong = this.state.gioHang.reduce((tongSL, sp, index) => {
            // công thức tính toán 
            // tổng số lượng mới = tổng số lượng cũ + sp.soLuong
            return tongSL += sp.soLuong
        }, 0)
        return tong.toLocaleString();
    }

    render() {
        return (
            <div className='container'>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                <div className="dropdown-menu" aria-labelledby="dropdownId">
                                    <a className="dropdown-item" href="#">Action 1</a>
                                    <a className="dropdown-item" href="#">Action 2</a>
                                </div>
                            </li>
                        </ul>
                        <div className="form-inline my-2 my-lg-0">
                            <p className='text-white'>Giỏ Hàng ({this.tinhTongSL()})</p>
                        </div>
                    </div>
                </nav>
               <DanhSachSP addToCart={this.addToCart} phoneList = {this.phoneList}/>
               <GioHang removeCart={this.removeCart} changeSL={this.changeSL} gioHang={this.state.gioHang}/>
            </div>
        )
    }
}
