import React, { Component, Fragment } from 'react';
import { usersServices } from '../../services/usersServices';
import '../../css/profilePage.css'
import { EditProfileModal } from '../components/Modals/EditProfileModal';
import M from "materialize-css";
import { validationService } from '../../services/validationService';


export class ProfilePage extends Component {
    constructor(props) {
        super();

        this.state = {
            profile: null,
            showModal: false,
            name:'',
            about:'',
            photo:''
        }
    }

    componentDidMount() {
        this.loadProfile();
    }

    loadProfile = () => {
        usersServices.fetchProfile()
            .then(profile => {
                this.setState({
                    profile: profile
                });
            })
    }

    handleOpenModal = (event) => {
        event.preventDefault();

        this.setState({
            showModal: true
        })
    }

    handleUsername = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleAbout = (event) => {
        this.setState({
            about: event.target.value
        })
    }

    handlePhoto = (event) => {
        this.setState({
            photo: event.target.value
        })
    }

    handleClose = (event) => {
        event.preventDefault();
        this.closeModal();
    }

    closeModal = () => {
        this.setState({
            showModal:false,
            name: '',
            about:'',
            photo:''
        })
        // validationService.validateImageForm(this.state.photo)
    }

    updateUserProfile = (name, about, photo) => {
        // validationService.validateImageForm(this.state.photo);

        usersServices.updateUserProfile(this.state.name, this.state.about, this.state.photo)
            .then(() => {
                this.closeModal();
                this.loadProfile();
            });
    }

   

    render() {

        const profileInfo = this.state.profile;

        if (profileInfo === null) {
            return <div> Loading profile </div>
        }
        return (
            <Fragment>
                <div className='container'>
                    <div className='col s12 center'>
                        <div className='row'>
                            {profileInfo.avatarUrl === ""
                                ? <img src="http://www.iglax.org/wp-content/uploads/2014/12/placeholder-Copy-11-1.png" className='responsive-img circle img' />
                                : <img src={profileInfo.avatarUrl} className='responsive-img circle img' />}
                        </div>
                        <div className='row profile-name'>
                            <h4>{profileInfo.name}</h4>
                        </div>
                        
                        <EditProfileModal showModal = {this.state.showModal} name={this.state.name} about={this.state.about} photo={this.state.photo} handleUsername={this.handleUsername} handleAbout={this.handleAbout} handlePhoto={this.handlePhoto} updateUserProfile={this.updateUserProfile} handleClose={this.handleClose}/>

                        <a className="waves-effect waves-light btn modal-trigger " onClick={this.handleOpenModal} >Edit Profile</a>
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
                </div>


            </Fragment>
        );
    }
}

