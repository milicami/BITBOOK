import React, { Component } from 'react';
import { SingleUser } from "./SingleUserCard";
import {NoUser} from "./NoUser";
import { Loader } from "../../partials/Loader";

export class UserList extends Component {
    
    

    renderUsers = () => {
        const users = this.props.users;
        if (users.length > 0) {
            return users.map((user, index) => {
                return <SingleUser myUser={user} key={index} />
            });
        } else {
           if (this.props.searchInputValue) {
                return <NoUser />
           }

            return <Loader />
        }
    };

    render() {
        return (
            <div className="container">
                <ul className="collection">
                    {this.renderUsers()}
                </ul>
            </div>
        )
    }
}