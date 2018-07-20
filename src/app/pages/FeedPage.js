import React, { Component, Fragment } from 'react';
import { postsServices } from '../../services/postsServices';
import { FeedList } from '../components/Feed/FeedList';
import { CreatePostButton } from '../components/Feed/CreatePostButton';
import { CreatePostModal } from "../components/Feed/CreatePostModal";
import "materialize-css";
import { FilterPostsDropDown } from "../components/Feed/FilterPostsDropDown";
import { get } from '../../services/APIService';


export class FeedPage extends Component {

    constructor(props) {
        super(props);

        this.state = ({
            posts: [],
            newPostType: '',
            filteredPosts: [],
            selectedPostFilter: "allPosts",
            profile: null
        })
    }

    componentDidMount() {
        this.loadPosts();
        this.handlePagination();
    }

    loadPosts = () => {
        postsServices.fetchPosts()
            .then(data => {
                this.setState({
                    posts: data,
                    filteredPosts: data
                })
            })
            .catch(message => {
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

    filterPosts = (event) => {

        if (event.target.value === 'text') {
            const filteredPosts = this.state.posts.filter((post) => {
                return post.type.includes('text');
            })
            this.setState({
                filteredPosts: filteredPosts,
                selectedPostFilter: event.target.value
            });

        } else if (event.target.value === 'imageUrl') {
            const filteredPosts = this.state.posts.filter((post) => {
                return post.type.includes('image');
            })
            this.setState({
                filteredPosts: filteredPosts,
                selectedPostFilter: event.target.value
            });

        } else if (event.target.value === 'videoUrl') {
            const filteredPosts = this.state.posts.filter((post) => {
                return post.type.includes('video');
            })
            this.setState({
                filteredPosts: filteredPosts,
                selectedPostFilter: event.target.value
            });

        } else if (event.target.value === "allPosts") {
            const filteredPosts = this.state.posts
            this.setState({
                filteredPosts: filteredPosts,
                selectedPostFilter: event.target.value
            })
        }
    }

    handleSubmit = (postBodyContent) => {
        let newPostPropertyType = this.state.newPostType;
        const userId = localStorage.getItem('userId')
        const newPost = {

            date: Date.now(),
            userId: userId,
            userDisplayName: "NoReturn",
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
                this.setState({
                    selectedPostFilter: "allPosts"
                });
            })
            .catch(message => {
                console.log(message)
                alert("Failed to create post.")
            })
    }

    handleClose = () => {
        this.setState({
            newPostType: null
        });
    }

    handlePagination = (event) => {

        get('http://bitbookapi.azurewebsites.net/api/Posts?$top=10&$skip=10')
            .then(data => {
                this.setState({
                    posts: data,
                    filteredPosts: data
                })
            })
    }

    render() {
        return (
            <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col s10">
                            <FeedList posts={this.state.filteredPosts} />
                        </div>
                        <div className="col s2">
                            <FilterPostsDropDown filterPosts={this.filterPosts} selectedPostFilter={this.state.selectedPostFilter} />
                            <CreatePostModal newPostType={this.state.newPostType} handleSubmit={this.handleSubmit} loadPosts={this.loadPosts} handleClose={this.handleClose} />
                            <CreatePostButton handlerPostType={this.handlerPostType} />
                        </div>
                    </div>
                    <ul className="pagination">
                        <li className="disabled"><a href="#!"><i className="material-icons">chevron_left</i></a></li>
                        <li className="active"><a href="#!">1</a></li>
                        <li className="waves-effect"><a href="#!">2</a></li>
                        <li className="waves-effect"><a href="#!">3</a></li>
                        <li className="waves-effect"><a href="#!" onClick={this.handlePagination}><i className="material-icons">chevron_right</i></a></li>
                    </ul>
                </div>
            </Fragment>
        );
    }

};



