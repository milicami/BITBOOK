import React, { Component } from 'react';
import App from '../../App.css';



export class EditProfileModal extends Component {
    constructor(props) {
        super(props)
    }
  
 
    render() {
        if (!this.props.showModal) {
            return null;
        }

        return (
            <div className="overlay">
                <div id="modalPost" className="modal open" style={{ display: 'block', top: 150 }}>
                    <div className="modal-content" style={{ width: '100%', height: '100%' }}>
                        <h4>Update Profile</h4>
                        
                            <form>
                                <div> Username </div>
                                <input type="text" value={this.props.name} placeholder="enter new username" onChange={this.props.handleUsername}/>
                                <br />
                                <div> About </div>
                                <input type="text"  value={this.props.about} placeholder="enter description" onChange={this.props.handleAbout}/>
                                <div> Upload photo </div>
                                {/* <input type="file" value={this.props.photo} onChange={this.props.handlePhoto}/> */}
                                <input type="text" value={this.props.photo} placeholder="photo url" onChange={this.props.handlePhoto}/>
                            </form>
                        
                        <div className="modal-footer">
                            <button className="modal-close waves-effect waves-green btn-flat" onClick={this.props.handleClose}>Close</button>
                            <button className="modal-close waves-effect waves-green btn-flat" onClick={this.props.updateUserProfile}>Update</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
