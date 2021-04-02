import React, { Component } from 'react'
import './Button.css'
class Button extends Component {

    isOpearator = (val) =>{
        return !isNaN(val) || val==="." || val==="=";
    }
    render() {
        return (
            <div className={`button ${this.isOpearator(this.props.children) ? " " : "operator"}`}  
                onClick={() => this.props.handClick(this.props.children)}
            >
              {this.props.children}
            </div>
        )
    }
}

export default Button
