import React, { Component, Fragment } from 'react';
import { postsServices } from '../../services/postsServices';
import { SingleTextPost } from '../components/Post/SingleTextPost';
import { SingleVideoPost } from '../components/Post/SingleVideoPost';
import { SingleImagePost } from '../components/Post/SingleImagePost';
import { SingleComment } from '../components/Post/SingleComment';
import { commentsServices } from '../../services/commentsServices';
import { usersServices } from '../../services/usersServices';
import postPage from '../../css/postPage.css'

export class PostPage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            post: null,
            comments: null,
            user: {},
            inputValue: ""
        }
    }

    componentDidMount() {
        this.loadSinglePost(this.props.match.params.type, this.props.match.params.id);
        this.loadComments(this.props.match.params.id);
    }

    loadSinglePost = (type, postId) => {
        postsServices.fetchSinglePost(type, postId)
            .then(post => {
                this.setState({ post });
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

    displayPost = () => {
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

    handleChange = (event) => {
        event.preventDefault();
        this.setState({
            inputValue: event.target.value
        });
    }

    loadNewComment = (event) => {
        const comment = {
            body: this.state.inputValue,
            postId: this.state.post.id,
        }

        if (this.state.inputValue === "") {
            event.preventDefault();

        } else {

            commentsServices.addComment(comment)
                .then((response) => {
                    return response.json()
                })
                .then(newPost => {
                    this.loadComments(this.props.match.params.id)
                    this.setState({
                        inputValue: ''
                    });
                })
        }

    }

    mapComments = () => {
        this.state.comments.map(comment => {
            return <SingleComment comment={comment} user={this.state.user} />
        })
    }

    render() {

        if (!this.state.comments) {
            return <h3>Loading...</h3>
        }
        return (
            <Fragment>
                <div className="container">
                {this.state.post === null ? "" : this.displayPost()}
                <br />
                {/* <div className="container comments"> */}
                    <div className="row">
                        <div className="input-field">
                            <input type="text" id="autocomplete-input" className="autocomplete col s11" placeholder='Add your comment' onChange={this.handleChange} value={this.state.inputValue}/>
                            <label htmlFor="autocomplete-input" ></label>
                            <div className='col s1'>
                                <button className="btn waves-effect waves-light" type="submit" disabled={!this.state.inputValue} name="action" onClick={this.loadNewComment}>SEND</button>
                            </div>
                            <div className="col s3 color-red">{this.state.inputValue ? "" : "*Comment input is required"} </div>
                        </div>
                    </div>
                    <div className="row">

                        <ul className="collection">
                            {this.state.comments.map(comment => {
                                return <SingleComment comment={comment} user={this.state.user} />
                            })}
                        </ul>
                    </div>

                {/* </div> */}

                </div>
            </Fragment>
        )
    }


}