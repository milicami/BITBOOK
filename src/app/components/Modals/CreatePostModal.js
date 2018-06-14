import React, { Component, Fragment } from 'react';
import M from "materialize-css";
import { textPostEndpoint, imagePostEndpoint, videoPostEndpoint } from "../../../shared/constants";

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

    chooseEndpoint = () => {
        const postBodyType = this.props.newPostType
        let makePostEndpoint = "";
        if (postBodyType === "text") {
            makePostEndpoint = textPostEndpoint
        } else if (postBodyType === "imageUrl") {
            makePostEndpoint = imagePostEndpoint
        } else if (postBodyType === "videoUrl") {
            makePostEndpoint = videoPostEndpoint
        }
        return makePostEndpoint;
    };

    createNewPost = (newPost) => {
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify(newPost),
            headers: {
                'Content-Type': 'application/json',
                'Key': 'bitbookdev',
                'SessionId': '2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE'
            }
        }
        return fetch(this.chooseEndpoint(), requestOptions)
    };

    
    // type = () => {
    //     switch(this.props.newPostType) {
    //         case 'text' : 
    //         text : text;
    //         break;
    //         case 'imageUrl' : 
    //         imageUrl = imageUrl;
    //         break;
    //         case 'videoUrl' : 
    //         videoUrl = videoUrl;
    //         break;
    //     }
        
    //    } 

    handleSubmit = (event) => {
        event.preventDefault()
        const postBodyContent = this.state.inputValue;
       
        const newPost = {
            id: 1,
            date: Date.now(),
            userId: 1,
            userDisplayName: "Average Code",
            type: this.props.newPostType,
            numOfComments: 0,
            text : postBodyContent
        }

        this.createNewPost(newPost)
            .then(response => {
                return response.json()
            })
            .then(newPost => {
                console.log(newPost);
            })

        this.setState({
            inputValue: ''
        });;

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
                    <a href="#!" className="modal-close waves-effect waves-green btn-flat" onClick={this.handleSubmit}>POST</a>
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
                    <a href="#!" className="modal-close waves-effect waves-green btn-flat" onClick={this.handleSubmit}>Post</a>
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
                    <a href="#!" className="modal-close waves-effect waves-green btn-flat" onClick={this.handleSubmit}>Post</a>
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
