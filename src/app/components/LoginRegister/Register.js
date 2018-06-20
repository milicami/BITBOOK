import React, { Component } from 'react';
import { usersServices } from "../../../services/usersServices"

export class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
                username: "",
                name: "",
                email: "",
                password: "",
                error: ""
        }
    }

    handleChange = (event) => {
        const field = event.target.name
        this.setState({
            [field]: event.target.value
        });
    }

    handleRegister = (event) => {
        event.preventDefault()
        const username = this.state.username;
        const name = this.state.name;
        const email = this.state.email;
        const password = this.state.password;

        const newUserObj = { 
            username: username,
            name : name,
            email: email,
            password : password
        }
        usersServices.registerUser(newUserObj)
        .then(response => {
            return response.json()
        })
        .then(response => {
            if (response.error) {
                this.setState({error: response.error.message})
            }
        });

        this.setState({
            username: "",
            name: "",
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
                        {this.state.error}
                            <input id="name" type="text" className="validate" name="name" value={this.state.name} onChange={this.handleChange} />
                            <label for="name">Full Name</label>
                        </div>
                        <div className="input-field col s12">
                            <input id="username" type="text" className="validate" name="username" value={this.state.username} onChange={this.handleChange} />
                            <label for="username">Username</label>
                        </div>
                        <div className="input-field col s12">
                            <input id="email" type="email" className="validate" name="email" value={this.state.email} onChange={this.handleChange} />
                            <label for="email">Email</label>
                        </div>

                        <div className="input-field col s12">
                            <input id="password" type="password" className="validate" name="password" value={this.state.password} onChange={this.handleChange} />
                            <label for="password">Password</label>
                        </div>
                        <div className="col s12">
                            <a className="#e57373 red lighten-2 btn" onClick={this.handleRegister} type="submit" name="action">Register</a>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}