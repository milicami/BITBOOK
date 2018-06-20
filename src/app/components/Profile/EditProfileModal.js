import React, { Component } from 'react';
import App from '../../App.css';
import { usersServices } from '../../../services/usersServices';
import '../../../css/profilePage.css';
import { Form } from './Form';


export const EditProfileModal = (props) => {

    if (!props.showModal) {
        return null;
    }

    return (
        <div className="overlay-modal">
            <div id="modalPost" className="modal open modal-style" style={{ display: 'block', top: 100 }}>
                <div className="modal-content">
                    <h4>Update Profile</h4>
                    <Form profile={props.profile} updateUserProfile={props.updateUserProfile} handleClose={props.handleClose} />
                    {/* <div className="modal-footer">
                        <button className="modal-close waves-effect waves-green btn-flat comment-button" onClick={props.handleClose}>Close</button>
                        <button
                            className="modal-close waves-effect waves-green btn-flat comment-button" onClick={props.updateUserProfile}
                            disabled={props.error || !props.photo}>
                            Update
                        </button>
                    </div> */}
                </div>
            </div>
        </div>
    );
}


