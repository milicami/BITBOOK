import React, { Component, Fragment } from 'react';
import { UserList } from '../components/Users/UsersList';
import { usersServices } from "../../services/usersServices";
import { SearchUsers } from "../components/Users/SearchUsers"


export class PeoplePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            inputValue: "",
            filteredUsers: []
        }
    }

    componentDidMount() {
        this.loadUsers();
    }

    loadUsers = () => {
        usersServices.fetchUsers()
            .then(data => {
                this.setState({
                    users: data,
                    filteredUsers: data
                });
            });
    }

    handlerSearchUsers = (event) => {
        this.setState({
            inputValue: event.target.value
        });
        let inputValue = this.state.inputValue.toLowerCase();
        const filteredUsers = this.state.users.filter((user) => {
        const userName = user.name.toLowerCase();
            return userName.includes(event.target.value)
        });
        this.setState({
            filteredUsers: filteredUsers
        });
    }

    closeSearch = (event) => {
        this.setState({
            inputValue: '',
        });
        this.loadUsers();
    }

    render() {
        return (
            <Fragment>
                <SearchUsers searchInputValue={this.state.inputValue} handlerSearchUsers={this.handlerSearchUsers} closeSearch={this.closeSearch} />
                <UserList users={this.state.filteredUsers} />
            </Fragment>
        )
    }
}