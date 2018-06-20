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
            name: '',
            about: '',
            photo: '',
            switchUpload: true,
            switchClass: 'show',
            error: null,
            inputFileValue: null

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
            // photo: event.target.files[0]
        })

        this.setState({ error: null });
        const valObj = validationService.validateImageForm(event.target.value)

        if (valObj.error) {
            this.setState({ error: valObj.error });
            return;
        }
    }

    handleClose = (event) => {
        event.preventDefault();
        this.closeModal();
    }

    closeModal = () => {
        this.setState({
            showModal: false,
            name: '',
            about: '',
            photo: ''
        })
    }

    updateUserProfile = (name, about, photo) => {
        usersServices.updateUserProfile(this.state.name, this.state.about, this.state.photo)
            .then(() => {
                this.closeModal();
                this.loadProfile();
            });
    }

    handlePhotoUpload = (event) => {

        if (this.state.switchUpload) {
            this.setState({
                // switchClass: 'hide',
                switchUpload: false
            })
        } else {
            this.setState({
                // switchClass: 'show',
                switchUpload: true
            })
        }
    }

    onImgFileChange = (event) => {
        this.setState({
            inputFileValue: event.target.files[0]
        })
    }


    onImgFileUpload = (event) => {
        const imgFile = this.state.inputFileValue;

        return usersServices.uploadUserPicture(imgFile)
            .then(photo => this.setState({ photo }));
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

                        <EditProfileModal
                            showModal={this.state.showModal}
                            name={this.state.name}
                            about={this.state.about}
                            photo={this.state.photo}
                            handleUsername={this.handleUsername}
                            handleAbout={this.handleAbout}
                            handlePhoto={this.handlePhoto}
                            updateUserProfile={this.updateUserProfile}
                            handleClose={this.handleClose}
                            switchUpload={this.state.switchUpload}
                            // switchClass={this.state.switchClass}
                            handlePhotoUpload={this.handlePhotoUpload}
                            error={this.state.error}
                            uploadPhoto={this.uploadPhoto}
                            inputFileValue={this.state.inputFileValue}
                            onImgFileChange={this.onImgFileChange}
                            onImgFileUpload={this.onImgFileUpload} />

                        <a className="waves-effect waves-light btn modal-trigger comment-button" onClick={this.handleOpenModal} >Edit Profile</a>
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

