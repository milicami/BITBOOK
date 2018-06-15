import React, { Component, Fragment } from 'react';
import M from "materialize-css";


export class CreatePostModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            inputValue: event.target.value
        });
    };

    // handleClose = (event) => {
    //     this.setState({
    //         inputValue: ''
    //     })
    // }

  
   
   onCreate = (event) => {
    event.preventDefault();
    this.props.handleSubmit(this.state.inputValue);
    this.setState({
        inputValue: ""
    });
    this.props.loadPosts();
   }

    renderTextForm = () => {
        return (
            <React.Fragment>
                <div className="modal-content">
                    <h4>New  Post<button className="right modal-close" onClick={this.handleClose}><i className="material-icons">close</i></button></h4>
                    <p>Post content</p>
                    <input id="post" type="text" name="newPost" className="validate" value={this.state.inputValue}
                        onChange={this.handleChange} />
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
                    <h4>New Image Post</h4>
                    <p>Image link</p>
                    <input id="image" type="text" name="newImage" className="validate" value={this.state.inputValue}
                        onChange={this.handleChange} />
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
                    <h4>New Video Post</h4>
                    <p>YouTube video link</p>
                    <input id="image" type="text" name="newVideo" className="validate" value={this.state.inputValue}
                        onChange={this.handleChange} />
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
