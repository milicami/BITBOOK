import React, { Fragment, Component } from 'react';
import { SingleUser } from "./SingleUserCard"
import { SearchUsers } from "./SearchUsers"

export class UserList extends Component {
    constructor(props) {
        super(props);

    };

    renderUsers = () => {
        const users = this.props.users;
        return users.map((user, index) => {
            return <SingleUser myUser={user} key={index} />
        });
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