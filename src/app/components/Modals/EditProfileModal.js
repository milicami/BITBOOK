import React, { Component } from 'react';
import App from '../../App.css';
import { usersServices } from '../../../services/usersServices';
import '../../../css/profilePage.css';

export class EditProfileModal extends Component {
    constructor(props) {
        super(props)

    }


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
                            <input type="text" value={this.props.name} placeholder={this.props.profile.name} onChange={this.props.handleUsername} />
                            <br />
                            <div> About </div>
                            <input type="text" value={this.props.about} placeholder={this.props.profile.aboutShort} onChange={this.props.handleAbout} />
                            <div> Upload photo </div>

                            {this.props.switchUpload
                                ? <input type="text" value={this.props.photo} placeholder="photo url" onChange={this.props.handlePhoto} />
                                : <input type="file" onChange={this.props.onImgFileChange} />
                            }

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
                            <button
                                className="modal-close waves-effect waves-green btn-flat comment-button" onClick={this.props.updateUserProfile}
                                disabled={this.props.error || !this.props.photo}>
                                Update
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
