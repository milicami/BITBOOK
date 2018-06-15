import React, { Component, Fragment } from 'react';
import { postsServices } from '../../services/postsServices';
import { SingleTextPost } from '../components/Post/SingleTextPost';
import { SingleVideoPost } from '../components/Post/SingleVideoPost';
import { SingleImagePost } from '../components/Post/SingleImagePost';
import { SingleComment } from '../components/Post/SingleComment';
import { commentsServices } from '../../services/commentsServices';
import { usersServices } from '../../services/usersServices';


export class PostPage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            post: null,
            comments: [],
            user: {}
        }
    }

    componentDidMount() {
        this.loadSinglePost(this.props.match.params.type, this.props.match.params.id);
        this.loadComments(this.props.match.params.id);
    }


    loadSinglePost = (type, postId) => {
        postsServices.fetchSinglePost(type, postId)
            .then(post => {
                this.setState({post});
                this.loadSingleUser(post.userId);
            });
    }


    loadComments = (commentId) => {
        commentsServices.fetchComments(commentId)
            .then(comments => {
                this.setState({
                    comments: comments
                })
            })
    }

    loadSingleUser = (userId) => {
        usersServices.fetchSingleUser(userId)
            .then(user => {
                this.setState({
                    user: user
                })
            })
    }


    renderPost = () => {
        switch (this.state.post.type) {
            case 'text':
                return <SingleTextPost post={this.state.post} />
            case 'image':
                return <SingleImagePost post={this.state.post} />
            case 'video':
                return <SingleVideoPost post={this.state.post} />
            default:
                return <p>not valid type of input</p>
        }
    }

    render() {
        return (
            <Fragment>
                {this.state.post === null ? "" : this.renderPost()}
                <br />
                <div className="container comments">
                    <div className='row'>
                        <input type="text" name="comments" placeholder="Add your comments" className='col s9' />
                        <input type="button" value="Send" className='col s2' />
                    </div>
                </div>
                {this.state.comments.map(comment => {
                    return <SingleComment comment={comment} user={this.state.user}/>

                })}
            </Fragment>
        )
    }


}