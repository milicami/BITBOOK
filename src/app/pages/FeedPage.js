import React, { Component, Fragment } from 'react';
import { postsServices } from '../../services/postsServices';
import { FeedList } from '../components/Feed/FeedList';
import { CreatePostButton } from '../components/Feed/CreatePostButton'
import { CreatePostModal } from "../components/Modals/CreatePostModal"

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

    render() {
        return (
            <Fragment>
                <FeedList posts={this.state.posts} />
                <CreatePostModal newPostType={this.state.newPostType}/>
                <CreatePostButton handlerPostType={this.handlerPostType} />
            </Fragment>

        );
    }

};



