import React, { Component } from 'react'

export default class DoiMauXe extends Component {



    state = {
        imgURL: './img/black-car.jpg'
    }

    changColorCar = (color) => {
        this.setState({
            imgURL: `./img/${color}-car.jpg`
        })
    }

    render() {
        return (
            <div className='container'>
                <h2>DoiMauXe</h2>
                <div className="row">
                    <div className="col-8">
                        <img className='img-fluid' src={this.state.imgURL} alt="" />
                    </div>
                    <div className="col-4">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <button onClick={() => { 
                                     this.changColorCar('black');
                                 }} className='btn btn-dark'>Black</button>
                            </li>
                            <li className="nav-item">
                                <button onClick={() => { 
                                    this.changColorCar('red');
                                 }} className='btn btn-danger my-2'>Red</button>
                            </li>
                            <li className="nav-item">
                                <button onClick={() => { 
                                    this.changColorCar('silver');
                                 }} className='btn btn-light my-2'>Silver</button>
                            </li>
                            <li className="nav-item">
                                <button onClick={() => { 
                                    this.changColorCar('steel');
                                 }} className='btn btn-secondary'>Steel</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
