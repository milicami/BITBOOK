import React, { Component } from 'react';
import  "../../css/loginRegister.css";
import { Login } from '../components/LoginRegister/Login';
import { Register } from '../components/LoginRegister/Register';

export class LogInRegisterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginTab: true
        }
    }

    tabLoginClick = () =>{
        this.setState({
            loginTab: true
        });
    }

    tabRegisterClick = () =>{
        this.setState({
            loginTab: false
        });
    }

    onLogin = () => {
        this.props.history.push('/feed');
    }

    onRegister = () =>{
        this.setState({
            loginTab: true
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s7">
                        <h1>BitBook {`${this.state.loginTab ? "Login" : "Register" }`} </h1>
                        <p className="login-text">Welcome to Bitbook. Create an account or log in to our social network. Connect with friends, family and other people you know. Share photos and videos and get updates.</p>
                    </div>
                    <div className="col s5">
                        <div className="row">
                            <div className="form-wrapper">
                                <div className="col s6">
                                    <p className={`${this.state.loginTab ? "active1" : "" }`} onClick={this.tabLoginClick}>Login</p>
                                </div>
                                <div className="col s6">
                                    <p className={`${this.state.loginTab ? "" : "active1" }`} onClick={this.tabRegisterClick}>Register</p>
                                </div>
                                <div className="row">
                                    <div className="col s12">
                                     {
                                         this.state.loginTab ? <Login onSuccessfulLogin={this.onLogin}/> : <Register onSuccessfulRegister={this.onRegister}/>
                                     }
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

