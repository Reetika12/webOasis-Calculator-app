import React, { Component } from 'react'
import Button from '../Components/Button';
import Input from '../Components/Input'
import ClearButton from '../Components/ClearButton'
import './ParentComponent.css'
// import { add, sub, mult, divi} from '../Components/Calculator'
 class ParentComponent extends Component {
    render() {
        return (
            <div className="app" >
                <div className="calcWrapper">
                    <div className="row">
                        <Input>
                         jgjfhfh
                        </Input>
                    </div>
                    <div className="row">
                        <Button>7</Button>
                        <Button>8</Button>
                        <Button>9</Button>
                        <Button>/</Button>
                    </div>
                    <div className="row">
                        <Button>4</Button>
                        <Button>5</Button>
                        <Button>6</Button>
                        <Button>*</Button>
                    </div>
                    <div className="row">
                        <Button>1</Button>
                        <Button>2</Button>
                        <Button>3</Button>
                        <Button>+</Button>
                    </div>
                    <div className="row">
                        <Button>.</Button>
                        <Button>0</Button>
                        <Button>=</Button>
                        <Button>-</Button>
                    </div>
                    <div>
                        <ClearButton>
                            Clear
                        </ClearButton>
                    </div>
                </div>
            </div>
        )
    }
}

export default ParentComponent
