import React, { Component } from 'react';

export class EditProfileModal extends Component {
    constructor(props) {
        super(props)

    }

    handleOpen = () => {
        this.setState({
            hideModal: true
        })
    }

    render() {

       
        return (
            <div>
                <div id="modalPost" className="modal open" style={{ display: 'block', top: 150 }}>
                    <div class="modal-content">
                        <h4>Update Profile</h4>
                        <p>A bunch of text</p>
                    </div>
                    <div className="modal-footer">
                        <a href="#!" class="modal-close waves-effect waves-green btn-flat">Update</a>
                    </div>
                </div>
            </div>
        );
    }
}
