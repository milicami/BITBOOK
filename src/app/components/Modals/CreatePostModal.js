import React, { Component, Fragment } from 'react';
import M from "materialize-css";
import {validationService} from '../../../services/validationService';


export class CreatePostModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            hideValidateMessage: "hideValidateMessage"
        }
    }

    closeOnX = (event) => {
        this.props.handleClose()
        this.setState({
            inputValue: "",
            hideValidateMessage: "hideValidateMessage"
        })
    }

    handleChange = (event) => {
        this.setState({
            inputValue: event.target.value
        });
    };

    onCreate = (event) => {
        event.preventDefault();
    
       if(validationService.isPostContentValid(this.state.inputValue, this.props.newPostType)) {
            this.setState({hideValidateMessage:"hideValidateMessage"})
            this.props.handleSubmit(this.state.inputValue);
            this.setState({
                inputValue: "",
                hideValidateMessage: "hideValidateMessage"
            });
        } else {
            this.setState({hideValidateMessage:"showValidateMessage"})
            return
        }
    }

    renderTextForm = () => {
        return (
            <React.Fragment>
                <div className="modal-content">
                    <button className="right modal-close" onClick={this.closeOnX}><i className="material-icons">close</i></button>
                    <h4>New  Post</h4>
                    <p>Post content</p>
                    <input id="post" type="text" name="newPost" className="validate" value={this.state.inputValue}
                        onChange={this.handleChange} />
                        <p className={`${this.state.hideValidateMessage}`}>You should input text, or if you don't want to share post close post form</p>
                </div>
                <div className="modal-footer">
                    <a href="#!" className="modal-close waves-effect waves-green btn-flat" onClick={this.onCreate}>POST</a>
                </div>
            </React.Fragment>
        )
    }

    renderImageForm = () => {
        return (
            <React.Fragment>
                <div className="modal-content">
                    <button className="right modal-close" onClick={this.closeOnX}><i className="material-icons">close</i></button>
                    <h4>New Image Post</h4>
                    <p>Image link</p>
                    <input id="image" type="text" name="newImage" className="validate" value={this.state.inputValue}
                        onChange={this.handleChange} />
                        <p className={`${this.state.hideValidateMessage}`}>You should input valid image url, or if you don't want to share post close post form</p>
                </div>
                <div className="modal-footer">
                    <a href="#!" className="modal-close waves-effect waves-green btn-flat" onClick={this.onCreate}>Post</a>
                </div>
            </React.Fragment>
        )
    }

    renderVideoForm = () => {
        return (
            <React.Fragment>
                <div className="modal-content">
                    <button className="right modal-close" onClick={this.closeOnX}><i className="material-icons">close</i></button>
                    <h4>New Video Post</h4>
                    <p>YouTube video link</p>
                    <input id="image" type="text" name="newVideo" className="validate" value={this.state.inputValue}
                        onChange={this.handleChange} />
                        <p className={`${this.state.hideValidateMessage}`}>You should input valid youtube url, or if you don't want to share post close post form</p>
                </div>
                <div className="modal-footer">
                    <a href="#!" className="modal-close waves-effect waves-green btn-flat" onClick={this.onCreate}>Post</a>
                </div>
            </React.Fragment>
        )
    }

    render() {

        if (!this.props.newPostType) {
            return null;
        }
        return (
            <div className="overlay">
                <div id="modalPost" className="modal open" style={{ display: 'block', top: 150 }}>
                    {this.props.newPostType === 'text' && this.renderTextForm()}
                    {this.props.newPostType === 'videoUrl' && this.renderVideoForm()}
                    {this.props.newPostType === 'imageUrl' && this.renderImageForm()}
                </div>
            </div>
        )
    }
};
