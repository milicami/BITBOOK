import React, { Component } from 'react';
import App from '../../App.css';
import { usersServices } from '../../../services/usersServices';


export class EditProfileModal extends Component {
    constructor(props) {
        super(props)
    }


    

    render() {
        if (!this.props.showModal) {
            return null;
        }

        (this.props.switchUpload) ? <input type="file" value={this.props.photo} onChange={this.props.handlePhoto} /> : <input type="text"  value={this.props.photo} placeholder="photo url" onChange={this.props.handlePhoto} />



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

                           { (this.props.switchUpload) ?  <input type="text" className={this.props.switchClass} disable value={this.props.photo} placeholder="photo url" onChange={this.props.handlePhoto} /> : <input type="file" className={this.props.switchClass} value={this.props.photo} onChange={this.props.handlePhoto} onClick={this.props.uploadPhoto}/> }
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
                            <button onClick={this.props.imageFileUpload}> Upload photo </button>
                        </form>

                        <div className="modal-footer">
                            <button className="modal-close waves-effect waves-green btn-flat" onClick={this.props.handleClose}>Close</button>
                            <button className="modal-close waves-effect waves-green btn-flat" onClick={this.props.updateUserProfile} disabled={this.props.error || !this.props.photo} >Update</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
