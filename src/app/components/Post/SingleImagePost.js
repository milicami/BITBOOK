import React from 'react';
import "../../../css/feedPage.css";
import { postsServices } from "../../../services/postsServices";

export const SingleImagePost = (props) => {

    const myUserId = localStorage.getItem("userId");

    const handleDelete = (event) => {

        event.preventDefault();

        postsServices.deleteSinglePost(props.post.id)
            .then(() => props.onDelete());
    }

    return (
        <div className="row single-post">
            <div className="col s12 parent">
                <button className="delete-button" id={props.post.userId == myUserId ? "" : "hide"} onClick={handleDelete}>X</button>
                <br />
                <br />
                <div className="card">
                    <div className="card-image">
                        <img src={props.post.imageUrl} alt='img' />
                    </div>
                    <div className="card-action"></div>
                </div>
            </div>
        </div>
    );
}