import React, { Component } from 'react'

export default class DemoArray extends Component {

    productlist = [
        { id: 1, name: 'Black-car', url: './img/black-car.jpg', price: 6000 },
        { id: 2, name: 'Red-car', url: './img/red-car.jpg', price: 5000 },
        { id: 3, name: 'Silver-car', url: './img/silver-car.jpg', price: 4000 },
        { id: 4, name: 'Steel-car', url: './img/steel-car.jpg', price: 3000 },
    ]

    renderCar = () => {
        let content = [];
        for (let i = 0; i < this.productlist.length; i++) {
            let { name, url, price } = this.productlist[i];
            let trObj = <tr>
                <td>{name}</td>
                <td>
                    <img style={{ width: '120px' }} src={url} alt="" />
                </td>
                <td>
                    {price}$
                </td>
            </tr>
            content.push(trObj);
        }
        return content;
    }

    renderCarMap = () => {
        // let content = [];
        // trả kết quả ra khỏi hàm renderCarMap
        return  this.productlist.map((car) => {
            let { name, url, price } = car;
            //trả vê 1 cái mảng mới, return trong map chỉ dừng khi hết mảng
            //trả kết quả ra ngoài map
            return <tr>
                <td>{name}</td>
                <td>
                    <img style={{ width: '120px' }} src={url} alt="" />
                </td>
                <td>
                    {price}$
                </td>
            </tr>
        })
        // return content;
    }

    render() {
        return (
            <div className='container'>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderCar()}
                    </tbody>
                </table>

            </div>
        )
    }
}
