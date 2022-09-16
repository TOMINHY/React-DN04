import React, { Component } from 'react'
//code css ứng dụng toàn web
import './demoStyling.css';
// import loại file module css
import styleModule from "./StyleComponent.module.css";
export default class DemoStyling extends Component {
    render() {
        let styleObj = {
            color: "red",
            backgroundColor: "yellow"
        }
        return (
            <div>
                <p className={styleModule.styleFontSize}>demo module CSS</p>
                <p className={`${styleModule.styleFontSize} ${styleModule['color-red']}`}>demo nhiều class name</p>



                {/* External CSS - import link css */}
                <p className='demoCSS'>DemoStyling</p>
                {/* Code CSS chỉ có tác dụng riêng ở 1 component */}
                {/* Inline CSS */}
                <p style={styleObj}>Inline CSS</p>
                <p style={{ fontSize: '40px' }}>Inline CSS</p>
            </div>
        )
    }
}
