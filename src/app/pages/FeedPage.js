import React, { Component, Fragment } from 'react';
import { postsServices } from '../../services/postsServices';
import { FeedList } from '../components/Feed/FeedList';

export class FeedPage extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            posts: []
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
            })

    }

    render() {
        return (
            <Fragment>
                <FeedList posts={this.state.posts} />
            </Fragment>
        );
    }

};



