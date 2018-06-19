import React, { Component } from 'react';

export class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }
    }




    render() {
        return (
            <div className="row login-form">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="email" type="email" className="validate" name="email" value={this.state.email}/>
                            <label for="email">Email</label>
                        </div>

                        <div className="input-field col s12">
                            <input id="password" type="password" className="validate" name="password" value={this.state.password}/>
                            <label for="password">Password</label>
                        </div>
                        <div className="col s12">
                            <a className="#e57373 red lighten-2 btn">Login</a>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}