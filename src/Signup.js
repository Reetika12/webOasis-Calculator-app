import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'
// import './Button.css'
class Signup extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            fullName:'',
            userName:'',
            email:'',
            password:''
        }

    }
    changefullname =(event)=>{
        this.setState({
            fullName:event.target.value
        })
    }
    changeUsername = (event) => {
        this.setState({
            userName: event.target.value
        })
    }
    changeEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    changePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    onSubmitForm = (event) =>{
        event.preventDefault()
        const registered = {
            fullname: this.state.fullName,
            username: this.state.userName,
            email:this.state.email,
            password: this.state.password
        }
        axios.post('http://localhost:3001/app/signup', registered).then(response => console.log(response.data))
        this.setState({
            fullName:'',
            userName:'',
            email:'',
            password:''
        })
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="form-div">
                        <form onSubmit={this.onSubmitForm}>
                            <input type="text"
                            placeholder="Full Name"
                            onChange={this.changefullname}
                            value={this.state.fullName}
                            className="form-control form-group"/>
                            <input type="text"
                                placeholder="User Name"
                                onChange={this.changeUsername}
                                value={this.state.userName}
                                className="form-control form-group" />
                            <input type="text"
                                placeholder="Email"
                                onChange={this.changeEmail}
                                value={this.state.email}
                                className="form-control form-group" />
                            <input type="text"
                                placeholder="Password"
                                onChange={this.changePassword}
                                value={this.state.password}
                                className="form-control form-group" />
                            <input type="submit" className="btn btn-danger btn-block" value="submit"/>
                        </form>
                    </div>
                </div>
           
            </div>
        )
    }
}

export default Signup
