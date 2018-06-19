import React, { Component } from 'react';

export class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }




    render() {
        return (
            <div className="row login-form">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="last_name" type="text" className="validate" />
                            <label for="last_name">Full Name</label>
                        </div>
                        <div className="input-field col s12">
                            <input id="email" type="email" className="validate" />
                            <label for="email">Email</label>
                        </div>

                        <div className="input-field col s12">
                            <input id="password" type="password" className="validate" />
                            <label for="password">Password</label>
                        </div>
                        <div className="col s12">
                            <a className="#e57373 red lighten-2 btn">Register</a>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}