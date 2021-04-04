import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'
import './Signin.css'
import LogIn from './SignIn'
class Signup extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            fullName:'',
            userName:'',
            email:'',
            password:'',
            page:'main'
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
    changePage = () =>{
        console.log("page change")
        this.setState({
            page: "signIn"
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
       {this.state.page==="main" && <form className="parentstyle" onSubmit={this.onSubmitForm}>
            <h3>Sign Up</h3>
            <div className="form-group">
                <label className="labelStyle">Full name</label>
                <input type="text"
                placeholder="Full Name"
                onChange={this.changefullname}
                value={this.state.fullName}
                className="form-control form-group"/>
            </div>
            <div className="form-group">
                <label className="labelStyle">User name</label>
                <input type="text"
                    placeholder="User Name"
                    onChange={this.changeUsername}
                    value={this.state.userName}
                    className="form-control form-group" />
            </div>
            <div className="form-group">
                <label className="labelStyle">Email  </label>
                <input type="text"
                    placeholder="Email"
                    onChange={this.changeEmail}
                    value={this.state.email}
                    className="form-control form-group" />
            </div>
            <div className="form-group">
                <label className="labelStyle">Password</label>
            <input type="text"
                placeholder="Password"
                onChange={this.changePassword}
                value={this.state.password}
                className="form-control form-group" />
            </div>
            <div className="commonSignup">
                <input type="submit" className="signUpbutton" value="Register" />
                    <p className="forgot-password text-right">
                        Already registered ?
                    </p>
                    <button className="signUpbutton" onClick={this.changePage}>sign in</button>
            </div>
           </form>}
          {this.state.page === "signIn" && <LogIn />}
        </div>
        )}
        
    
}

export default Signup
