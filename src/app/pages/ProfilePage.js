import React, { Component, Fragment } from 'react';
import { usersServices } from '../../services/usersServices';
import '../../css/profilePage.css';
import { EditProfileModal } from '../components/Profile/EditProfileModal';
import "materialize-css";
import { Loader } from '../partials/Loader';


export class ProfilePage extends Component {
    constructor(props) {
        super();

        this.state = {
            profile: null,
            showModal: false,
        }
    }

    componentDidMount() {
        this.loadProfile();
    }

    loadProfile = () => {
        usersServices.fetchProfile()
            .then(response => {
                this.setState({
                    profile: response
                });
            })
    }

    updateUserProfile = (name, about, photo) => {
        usersServices.updateUserProfile(name, about, photo)
            .then(() => {
                this.loadProfile();
            });
    }

    handleOpenModal = (event) => {

        event.preventDefault();
        this.setState({
            showModal: true,
            name: this.state.profile.name,
            about: this.state.profile.aboutShort,
        })
    }

    handleClose = (event) => {

        event.preventDefault();
        
        this.setState({
            showModal: false,
            name: event.target.value,
            about: event.target.value,
            photo: event.target.value
        })
    }


    render() {

        const profile = this.state.profile;

        if (profile === null) {
            return <Loader />
        }
        return (
            <Fragment>
                <div className='container'>
                    <div className='col s12 center'>
                        <div className='row'>
                            {profile.avatarUrl === ""
                                ? <img src="http://www.iglax.org/wp-content/uploads/2014/12/placeholder-Copy-11-1.png" className='responsive-img circle img' alt="avatar" />
                                : <img src={profile.avatarUrl} className='responsive-img circle img' alt="avatar" />}
                        </div>
                        <div className='row profile-name'>
                            <h4>{profile.name}</h4>
                        </div>

                        <EditProfileModal
                            showModal={this.state.showModal}
                            handleClose={this.handleClose}
                            profile={this.state.profile}
                            updateUserProfile={this.updateUserProfile}
                        />
                        <a className="waves-effect waves-light btn modal-trigger comment-button" onClick={this.handleOpenModal}>Edit Profile</a>
                        <div className='row'>
                            <p className='about-short'>{profile.aboutShort}</p>
                        </div>
                        <div className='row'>
                            <div className='col s12 m6'>
                                <button className="comment-button posts-count" disabled><i className="fas fa-circle"></i> {profile.postsCount} Posts</button>
                            </div>
                            <div className='col s12 m6' id="post-comments-button">
                                <button className="comment-button comments-count"  disabled><i className="fas fa-circle"></i> {profile.commentsCount} Comments</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

