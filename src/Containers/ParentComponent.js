import React, { Component } from 'react'
import { add, sub, mult, divi} from '../Components/Calculator'
 class ParentComponent extends Component {
    render() {
        return (
            <div>
                sum of two numbers are {add(5,6)}
                <br/>
                subtraction of two numbers are {sub(8,4)}
                <br/>
                multiplication of two numbers are {mult(5,6)}
                <br/>
                Division of two numbers are {divi(10, 2)}
                <br/>
            </div>
        )
    }
}

export default ParentComponent
