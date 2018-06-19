import React, { Component } from 'react';
import { usersServices } from "../../../services/usersServices"

export class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
                name: "",
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

    handleRegister = (event) => {
        event.preventDefault()
        const name = this.state.name;
        const email = this.state.email;
        const password = this.state.password;

        const newUserObj = {
            name : name,
            email: email,
            password : password
        }
        usersServices.registerUser(newUserObj)
        .then(response => {
            console.log(response)
        })


        this.setState({
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
                            <input id="name" type="text" className="validate" name="name" value={this.state.name} onChange={this.handleChange} />
                            <label for="last_name">Full Name</label>
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