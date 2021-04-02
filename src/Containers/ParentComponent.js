import React, { Component } from 'react'
import Button from '../Components/Button';
import Input from '../Components/Input'
import ClearButton from '../Components/ClearButton'
import './ParentComponent.css'
import { add, sub, mult, divi} from '../Components/Calculator'
 class ParentComponent extends Component {
     constructor(props){
         super(props);
         this.state = {
            input:"",
            previousNumber:"",
            currentNumber:"",
            operator:""
         }
     }
    addToInput = (val) =>{
        this.setState({
            input: this.state.input + val
        })
    }
     addZeroToInput = (val)=>{
         // if input is not empty then add 0
         if(this.state.input !== "")
         {
            this.setState({
                input: this.state.input + val
            })
         }
     }
     handleClear = () => {
        this.setState({
            input: "",
            previousNumber: "",
            currentNumber: ""
        })
     }
     addNums = (val) => {
        this.setState({
            previousNumber: this.state.input,
            input: "",
            operator: "plus",
        })
     }
     subtract = () => {
        this.setState({
            previousNumber: this.state.input,
            input: "",
            operator: "minus"
        })
     }
     handleMult = () =>{
         this.setState({
             previousNumber: this.state.input,
             input: "",
             operator: "multiply"
         })
     }
     handledivision = () => {
         this.setState({
             previousNumber: this.state.input,
             input: "",
             operator: "division"
         })
     }
     commonMethod = (opt) =>{
         let num = opt(parseInt(this.state.previousNumber), parseInt(this.state.currentNumber))
         this.setState({
             input: num + " "
         })
    }
     evaluate = () => {
        this.state.currentNumber = this.state.input
        switch(this.state.operator)
        {
            case 'plus':
                return this.commonMethod(add)
            case 'minus':
                return this.commonMethod(sub)
            case 'multiply':
                return this.commonMethod(mult)
            case 'division':
                return this.commonMethod(divi)
            default:
                return;
        }
     }
     addDecimal = (val) =>{
        //add decimal if it is not in the input
        if(this.state.input.indexOf(".")===-1)
        {
            this.setState({
                input:this.state.input + val
            })
        }
     }
    render() {
        return (
            <div className="app" >
                <div className="calcWrapper">
                    <div className="row">
                        <Input>
                            {this.state.input}
                        </Input>
                    </div>
                    <div className="row">
                        <Button handClick={this.addToInput}>7</Button>
                        <Button handClick={this.addToInput}>8</Button>
                        <Button handClick={this.addToInput}>9</Button>
                        <Button handClick={this.handledivision} >/</Button>
                    </div>
                    <div className="row">
                        <Button handClick={this.addToInput}>4</Button>
                        <Button handClick={this.addToInput}>5</Button>
                        <Button handClick={this.addToInput}>6</Button>
                        <Button handClick={this.handleMult}>*</Button>
                    </div>
                    <div className="row">
                        <Button handClick={this.addToInput}>1</Button>
                        <Button handClick={this.addToInput}>2</Button>
                        <Button handClick={this.addToInput}>3</Button>
                        <Button handClick={this.addNums}>+</Button>
                    </div>
                    <div className="row">
                        <Button handClick={this.addDecimal}>.</Button>
                        <Button handClick={this.addZeroToInput}>0</Button>
                        <Button handClick={this.evaluate}>=</Button>
                        <Button handClick={this.subtract}>-</Button>
                    </div>
                    <div>
                        <ClearButton handleClick={this.handleClear}>
                            Clear
                        </ClearButton>
                    </div>
                </div>
            </div>
        )
    }
}

export default ParentComponent
