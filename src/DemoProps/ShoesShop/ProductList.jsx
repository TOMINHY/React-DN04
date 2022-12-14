import React, { Component } from 'react'
import ProductItem from './ProductItem';

export default class ProductList extends Component {

    renderShoes = () => {
        return this.props.arrayShoes.map((shoes) => {
            let { image, name, price , id } = shoes;
            // trả về một mảng chứa các đối tượng thẻ div col-4
            return <div className="col-4" key={`shoes-${id}`}>
              <ProductItem shoes={shoes}/>
            </div>
        })
    }


  render() {
    // console.log(this.props);
    return (
        <div className="row">
        {this.renderShoes()}
    </div>
    )
  }
}
