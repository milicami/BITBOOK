import React, { Component, Fragment } from 'react';
import { postsServices } from '../../services/postsServices';
import { FeedList } from '../components/Feed/FeedList';
import { CreatePostButton } from '../components/Feed/CreatePostButton'
import { CreatePostModal } from "../components/Modals/CreatePostModal"
import { textPostEndpoint, imagePostEndpoint, videoPostEndpoint } from "../../shared/constants";

export class FeedPage extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            posts: [],
            newPostType: '',
        })
    }


    componentDidMount() {
        this.loadPosts();
     
    }


    loadPosts = () => {

        postsServices.fetchPost()
            .then(data => {
                this.setState({
                    posts: data
                })
            });

    }

    handlerPostType = (event) => {

        if (event.target.parentElement.getAttribute("data-target") === 'modalPost') {
            this.setState({
                newPostType: 'text'
            });
        } else if (event.target.parentElement.getAttribute("data-target") === 'modalImage') {
            this.setState({
                newPostType: 'imageUrl'
            });
        } else if (event.target.parentElement.getAttribute("data-target") === 'modalVideo') {
            this.setState({
                newPostType: 'videoUrl'
            });
        }

    }

    chooseEndpoint = () => {
        const postBodyType = this.state.newPostType
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


    handleSubmit = (postBodyContent) => {
       let newPostPropertyType = this.state.newPostType;

        const newPost = {
            date: Date.now(),
            userId: 1,
            userDisplayName: "Average Code",
            type: this.state.newPostType,
            numOfComments: 0,
            
        }

        if (newPostPropertyType === "text"){
            newPost["text"] = postBodyContent;
        } else if (newPostPropertyType === "imageUrl") {
            newPost["imageUrl"] = postBodyContent;
        } else if (newPostPropertyType === "imageUrl") {
            newPost["videoUrl"] = postBodyContent;
        }
    
        this.createNewPost(newPost)
            .then(response => {
                return response.json()
            })
            .then(newPost => {
                this.setState({newPostType: null});
                console.log(newPost);
            })
    }

    render() {
        return (
            <Fragment>
                <FeedList posts={this.state.posts} />
                <CreatePostModal newPostType={this.state.newPostType} handleSubmit={this.handleSubmit} loadPosts={this.loadPosts}/>
                <CreatePostButton handlerPostType={this.handlerPostType} />
            </Fragment>

        );
    }

};



