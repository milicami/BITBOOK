import React from 'react';
import { postsServices } from "../../../services/postsServices"

export const SingleTextPost = (props) => {

    const myUserId = localStorage.getItem("userId");

    const onDelete = (event) => {

        event.preventDefault();
        postsServices.deleteSinglePost(props.post.id)
            .then(() => props.onDelete());
    }

    return (
        <div className="row single-post">
            <div className="col s12">
                <div className="card parent">
                    <button className="delete-button" id={props.post.userId == myUserId ? "" : "hide"} onClick={onDelete}>X</button>
                    <div className="card-text">
                    <br />
                    <br />
                        <p>{props.post.text}</p>
                    </div>
                    <div className="card-action"></div>
                </div>
            </div>
        </div>
    );
}