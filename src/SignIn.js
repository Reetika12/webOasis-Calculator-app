import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import './Signin.css'

 class Login extends Component {
    render() {
        return (
            <form className="parentstyle">
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label className="labelStyle">First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label className="labelStyle">Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label className="labelStyle">Email  </label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label className="labelStyle">Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>
                <div className="commonSignup">
                    <button type="submit" className="btn btn-primary btn-block signUpbutton">Sign Up</button>
                    <p className="forgot-password text-right">
                        Already registered <a href="#">sign in?</a>
                    </p>
                </div>
            </form>
        );
    }
}
export default Login
