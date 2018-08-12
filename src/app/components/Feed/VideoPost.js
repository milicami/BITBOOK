import React from 'react';
import { Link } from 'react-router-dom';
import '../../../css/feedPage.css'
import { postsServices } from '../../../services/postsServices';


export const VideoPost = (props) => {

    const { videoUrl, type, id, commentsNum } = props.post;

    const myUserId = localStorage.getItem("userId");


    const handleDelete = (event) => {

        event.preventDefault();

        postsServices.deleteSinglePost(props.post.id)
            .then(() => props.onSuccessfulDelete());
    }


    return (
        <Link to={`/post/${type}/${id}`} className='post-color'>
            <div className='video-post'>
                <div className="row">
                    <div className="col s12">
                        <div className="card parent">
                        <button className="delete-button" id={props.post.userId == myUserId ? "" : "hide"} onClick={handleDelete}>X</button>
                        <br />
                            <div className="card-video video-container">
                                <iframe width='100%' height='300' src={videoUrl} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                            </div>
                            <div className="card-action">
                                <span className=' col s6 offset s2'>Video Post </span>
                                {commentsNum === 0 ? "0" : commentsNum} comments
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};