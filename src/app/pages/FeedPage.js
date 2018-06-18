import React, { Component, Fragment } from 'react';
import { postsServices } from '../../services/postsServices';
import { FeedList } from '../components/Feed/FeedList';
import { CreatePostButton } from '../components/Feed/CreatePostButton';
import { CreatePostModal } from "../components/Modals/CreatePostModal";
import M from "materialize-css";
import { TextPost } from '../../entities/Post';



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

        postsServices.fetchPosts()
            .then(data => {
                this.setState({
                    posts: data
                })
            }).catch(message => {
                console.log(message)
                alert("Failed to load posts.")
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

    
    handleSubmit = (postBodyContent) => {
        let newPostPropertyType = this.state.newPostType;

        const newPost = {
            date: Date.now(),
            userId: 1,
            userDisplayName: "Average Code",
            type: this.state.newPostType,
            numOfComments: 0,

        }

        if (newPostPropertyType === "text") {
            newPost["text"] = postBodyContent;
        } else if (newPostPropertyType === "imageUrl") {
            newPost["imageUrl"] = postBodyContent;
        } else if (newPostPropertyType === "videoUrl") {
            newPost["videoUrl"] = postBodyContent.replace("watch?v=", "embed/");
        }

        postsServices.createNewPost(newPost, this.state.newPostType)
            .then(response => {
                return response.json()
            })
            .then(newPost => {
                this.setState({ newPostType: null });
                this.loadPosts();
            }).catch(message => {
                console.log(message)
                alert("Failed to create post.")
            })
    }

    handleClose = () => {
        this.setState({
            newPostType: null
        });
    }

    render() {
        return (
            <Fragment>
                <FeedList posts={this.state.posts} />
                <CreatePostModal newPostType={this.state.newPostType} handleSubmit={this.handleSubmit} loadPosts={this.loadPosts} handleClose={this.handleClose} />
                <CreatePostButton handlerPostType={this.handlerPostType} />
            </Fragment>
        );
    }

};



