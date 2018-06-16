import React, { Component, Fragment } from 'react';
import { usersServices } from '../../services/usersServices';
import '../../css/profilePage.css'


export class ProfilePage extends Component {
    constructor(props) {
        super();

        this.state = {
            profile: null
        }
    }

    componentDidMount() {
        this.loadProfile()
    }

    loadProfile = () => {
        usersServices.fetchProfile()
            .then(profile => {
                this.setState({
                    profile: profile
                });
            })
    }

    render() {

        const profileInfo = this.state.profile;

        if (profileInfo === null) {
            return <div> Loading profile </div>
        }
        return (
            <Fragment>
                <div className='container'>
                    <div className='row'>
                        {profileInfo.avatarUrl === ""
                            ? <img src="http://www.iglax.org/wp-content/uploads/2014/12/placeholder-Copy-11-1.png" className='img' />
                            : <img src={profileInfo.avatarUrl} className='img' />}
                    </div>
                    <div className='row profile-name'>
                        <h4>{profileInfo.name}</h4>
                    </div>
                    <div className='row'>
                        <p className='about-short'>
                            {profileInfo.aboutShort}
                        </p>
                    </div>
                    <div className='row'>
                        <div className='col s12 m6'>
                            <button type="button" className="btn btn-light comment-button" ><i className="fas fa-circle"></i> {profileInfo.postsCount} Posts</button>
                        </div>
                        <div className='col s12 m6'>
                            <button type="button" className="btn btn-light comment-button"><i className="fas fa-circle"></i> {profileInfo.commentsCount} Comments</button>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

