import React, { Component } from 'react';
import { PostsServices } from '../../services/postsServices';


export class FeedPage extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            posts: null
        })
    }

    loadPosts = () => {

        PostsServices.fetchPosts()
            .then(data => console.log(data))

    }

    render() {
        return (
            <div>
                <p>Nothing in feed</p>
            </div>
        );
    }

};



