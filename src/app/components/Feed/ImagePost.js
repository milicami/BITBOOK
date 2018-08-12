import React from 'react';
import { Link } from 'react-router-dom';
import "../../../css/feedPage.css";
import { postsServices } from '../../../services/postsServices';


export const ImagePost = (props) => {

    const { type, id, imageUrl, commentsNum } = props.post;
    const myUserId = localStorage.getItem("userId");

    const handleDelete = (event) => {

        event.preventDefault();

        postsServices.deleteSinglePost(props.post.id)
            .then(() => props.onSuccessfulDelete());
    }

    return (
        <Link to={`/post/${type}/${id}`} className='post-color'>
            <div className="row">
                <div className="col s12 single-post">
                    <div className="card parent">
                        <button className="delete-button" id={props.post.userId == myUserId ? "" : "hide"} onClick={handleDelete}>X</button>
                        <br />
                        <br />
                        <div className="card-image">
                            <img src={imageUrl} alt='img' />
                        </div>
                        <div className="card-action">
                            <span className=" col s6 offset s2 ">Image Post </span>
                            {commentsNum === 0 ? "0" : commentsNum} comments
                         </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};
