import React, { Fragment, Component } from 'react';
import { SingleUser } from "./SingleUserCard";
import { SearchUsers } from "./SearchUsers";
import {NoUser} from "./NoUser";

export class UserList extends Component {
    constructor(props) {
        super(props);
    };

    renderUsers = () => {
        const users = this.props.users;
        if (users.length > 0) {
            return users.map((user, index) => {
                return <SingleUser myUser={user} key={index} />
            });
        } else {
            return (
               <NoUser />
            )
        }
    };

    render() {
        return (
            <div className="container">
                <ul class="collection">
                    {this.renderUsers()}
                </ul>
            </div>
        )
    }
}