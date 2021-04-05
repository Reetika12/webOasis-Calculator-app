import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import './Signin.css'
import axios from 'axios'
import ToastMessage from './Components/ToastMessage'


 class Login extends Component {
     constructor(props){
         super(props);
         this.state={
             email:'',
             password:'',
             toastMessage: ""
         }
     }
    onEmailChange = (event)=>{
        this.setState({
            email:event.target.value
        })
    }

     setToastMessage = (message) => {
         this.setState({ toastMessage: message })
     }

     onPasswordChange = (event) => {
         this.setState({
             password: event.target.value
         })
     }
     signInEvent = (event) => {
         event.preventDefault()
         let { email, password} = this.state
         if (!email) {
             this.setState({
                 toastMessage: 'Email is required field',
             });
             return;
         }
         if (!password) {
             this.setState({
                 toastMessage: 'Password is required field',
             });
             return;
         }
         const registered = {
             email: this.state.email.trim(),
             password: this.state.password.trim()
         }
         axios.post('http://localhost:3001/app/signin', registered).then(response => 
             this.setState({
                 email: '',
                 password: '',
                 toastMessage: response.data.message
             })
         )
     }
    render() {
        return (
            <form className="parentstyle">
                <h3>Login</h3>
                <div className="form-group">
                    <label className="labelStyle">Email  </label>
                    <input type="email" className="form-control" value={this.state.email} onChange={this.onEmailChange} placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label className="labelStyle">Password</label>
                    <input type="password" className="form-control" value={this.state.password} onChange={this.onPasswordChange} placeholder="Enter password" />
                </div>
                <div className="commonSignup">
                    <button type="submit" onClick={this.signInEvent}className="btn btn-primary btn-block signUpbutton">Sign in</button>
                </div>
                {this.state.toastMessage && <ToastMessage
                    horizontal="right"
                    message={this.state.toastMessage}
                    open={true}
                    handleClose={() => this.setToastMessage("")}
                />}
            </form>
        );
    }
}
export default Login
