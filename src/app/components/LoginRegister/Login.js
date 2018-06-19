import React, { Component } from 'react';

export class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }
    }

    handleChange = (event) => {
        const field = event.target.name
        this.setState({
            [field]: event.target.value
        });
    }

    handleLogin = (event) => {
        event.preventDefault()
        const email = this.state.email;
        const password = this.state.password;

        this.setState({
            email: "",
            password: ""
        })
    }

    render() {
        return (
            <div className="row login-form">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="email" type="email" className="validate" name="email" value={this.state.email} onChange={this.handleChange}/>
                            <label for="email">Email</label>
                        </div>

                        <div className="input-field col s12">
                            <input id="password" type="password" className="validate" name="password" value={this.state.password} onChange={this.handleChange}/>
                            <label for="password">Password</label>
                        </div>
                        <div className="col s12">
                            <a className="#e57373 red lighten-2 btn" onClick={this.handleLogin} type="submit" name="action">Login</a>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}