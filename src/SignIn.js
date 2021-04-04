import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import './Signin.css'

 class Login extends Component {
    render() {
        return (
            <form className="parentstyle">
                <h3>Login</h3>
                <div className="form-group">
                    <label className="labelStyle">Email  </label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label className="labelStyle">Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <div className="commonSignup">
                    <button type="submit" className="btn btn-primary btn-block signUpbutton">Sign in</button>
                </div>
            </form>
        );
    }
}
export default Login
