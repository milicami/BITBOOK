import React, { Component, Fragment } from 'react';
import { usersServices } from '../../services/usersServices';
import '../../css/profilePage.css'
import { EditProfileModal } from '../components/Modals/EditProfileModal';
import M from "materialize-css";


import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};



export class ProfilePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalIsOpen: false,
            name:"",
            about: "",
            photo:""
        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({ modalIsOpen: true });
    }

    handleName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    afterOpenModal() {
        this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    

    updateUserProfile = (name, about, photo) => {
                usersServices.updateUserProfile()
            }



    render() {
        return (
            <div>
                <button onClick={this.openModal}>Edit Profile</button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <h4 ref={subtitle => this.subtitle = subtitle}>Update profile</h4>
                    <form>
                        <div>Name</div>
                        <input type="text" onChange={this.handleName()} />
                        <div>About</div>
                        <input type="text" />

                       
                        <button type="submit" onClick={this.updateUserProfile()}>update</button>
                        <button onClick={this.closeModal}>cancel</button>
                    </form>
                </Modal>
            </div>
        );
    }
}


// export class ProfilePage extends Component {
//     constructor(props) {
//         super();

//         this.state = {
//             profile: null,
//             hideModal: ''
//             // name:'',
//             // about:'',
//             // photo:'',
//             // disable: null

//         }
//     }

//     componentDidMount() {
//         this.loadProfile();
//     }

//     loadProfile = () => {
//         usersServices.fetchProfile()
//             .then(profile => {
//                 this.setState({
//                     profile: profile
//                 });
//             })
//     }

//     handleOpen = (event) => {
//         if (event.target.parentElement.getAttribute("data-target") === 'edit-profile') {
//             this.setState({
//                 hideModal: "text"
//             });

//         }
//     }

//     // handleClose = (event) => {
//     //     event.preventDefault()
//     //     this.setState({
//     //         hideModal: 'hide'
//     //     })
//     // }

//     updateUserProfile = (name, about, photo) => {
//         usersServices.updateUserProfile()
//     }


//     render() {

//         const profileInfo = this.state.profile;

//         if (profileInfo === null) {
//             return <div> Loading profile </div>
//         }
//         return (
//             <Fragment>
//                 <div className='container'>
//                     <div className='col s12 center'>
//                         <div className='row'>
//                             {profileInfo.avatarUrl === ""
//                                 ? <img src="http://www.iglax.org/wp-content/uploads/2014/12/placeholder-Copy-11-1.png" className='responsive-img circle img' />
//                                 : <img src={profileInfo.avatarUrl} className='responsive-img circle img' />}
//                         </div>
//                         <div className='row profile-name'>
//                             <h4>{profileInfo.name}</h4>
//                         </div>
//                         <EditProfileModal hideModal={this.hideModal} onClick={this.handleOpen} />
//                         <a className="waves-effect waves-light btn modal-trigger " data-target="edit-profile" href="#modal1" onClick={this.handleOpen}>Edit Profile</a>
//                         <div className='row'>
//                             <p className='about-short'>
//                                 {profileInfo.aboutShort}
//                             </p>
//                         </div>
//                         <div className='row'>
//                             <div className='col s12 m6'>
//                                 <button type="button" className="btn btn-light comment-button" ><i className="fas fa-circle"></i> {profileInfo.postsCount} Posts</button>
//                             </div>
//                             <div className='col s12 m6'>
//                                 <button type="button" className="btn btn-light comment-button"><i className="fas fa-circle"></i> {profileInfo.commentsCount} Comments</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//             </Fragment>
//         );
//     }
// }

