import React from 'react';
import { postsServices } from "../../../services/postsServices"

export const SingleVideoPost = (props) => {

    const onDelete = (event) => {

        event.preventDefault();
        postsServices.deleteSinglePost(props.post.id)
            .then(() => props.onDelete());
    }

    return (
        <div className='video-post'>
            <div className="row single-post">
                <div className="col s12 parent">
                    <button className="delete-button" onClick={onDelete}>X</button>
                    <br />
                    <div className="card">
                        <div className="card-video video-container">
                            <iframe width='100%' height='300' src={props.post.videoUrl} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                        </div>
                        <div className="card-action"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}