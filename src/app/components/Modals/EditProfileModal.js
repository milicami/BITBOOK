import React, { Component } from 'react';
import App from '../../App.css';
import { usersServices } from '../../../services/usersServices';
import '../../../css/profilePage.css';

export class EditProfileModal extends Component {
    constructor(props) {
        super(props)

        // this.state = {
        //     imageSrc: this.props.photoUrl
        // }
    }

    // onImageUpload = (event) => {
    //     event.preventDefault();
    //     const { photoUrl, onCloseAddModal, onImgFileUpload, inputFileValue } = this.props;
    //     if (inputFileValue) {
    //         onImgFileUpload(event)
    //             .then(photoUrl => {
    //                 this.setState({
    //                     imageSrc: photoUrl
    //                 })
    //             })
    //     } else {
    //         this.setState({
    //             imageSrc: photoUrl
    //         })
    //     }
       
    // }
    





    render() {
        if (!this.props.showModal) {
            return null;
        }

        this.props.switchUpload
        ? <input type="file" value={this.props.photo} onChange={this.props.handlePhoto} /> 
        : <input type="text" value={this.props.photo} placeholder="photo url" onChange={this.props.handlePhoto} />



        return (
            <div className="overlay">
                <div id="modalPost" className="modal open" style={{ display: 'block', top: 150 }}>
                    <div className="modal-content" style={{ width: '100%', height: '100%' }}>
                        <h4>Update Profile</h4>

                        <form>
                            <div> Username </div>
                            <input type="text" value={this.props.name} placeholder="enter new username" onChange={this.props.handleUsername} />
                            <br />
                            <div> About </div>
                            <input type="text" value={this.props.about} placeholder="enter description" onChange={this.props.handleAbout} />
                            <div> Upload photo </div>

                           { this.props.switchUpload
                                ?   <input type="text" className={this.props.switchClass} disable value={this.props.photo} placeholder="photo url" onChange={this.props.handlePhoto} /> :   <input type="file" className={this.props.switchClass}  onChange={this.props.onImgFileChange} /> 
                            }
                            
                            {/* <input type="file" className={this.props.switchClass} value={this.props.photo} onChange={this.props.handlePhoto} />
                            <input type="text" className={this.props.switchClass} value={this.props.photo} placeholder="photo url" onChange={this.props.handlePhoto} /> */}
                            <div className="switch">
                                <label>
                                    from url
                                    <input type="checkbox" value={this.props.switchUpload} onClick={this.props.handlePhotoUpload} />
                                    <span className="lever"></span>
                                    from file
                                </label>
                            </div>
                            <button className="comment-button" onClick={this.props.onImgFileUpload}> Upload photo </button>
                        </form>

                        <div className="modal-footer">
                            <button className="modal-close waves-effect waves-green btn-flat comment-button" onClick={this.props.handleClose}>Close</button>
                            <button className="modal-close waves-effect waves-green btn-flat comment-button" onClick={this.props.updateUserProfile} disabled={this.props.error || !this.props.photo} >Update</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
