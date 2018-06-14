import React from 'react';
import M from "materialize-css/dist/css/materialize.css"


export const CreatePostButton = (props) => {

    return (

        <div className="fixed-action-btn">
            <a className="btn-floating btn-large red">
            <i className="material-icons">add</i>
            </a>
            <ul>
                <li><button data-target="modalPost" onClick = {props.handlerPostType} className="btn-floating blue"><i className="material-icons btn modal-trigger post">Post</i></button ></li>
                <li><button data-target="modalImage" onClick = {props.handlerPostType} className="btn-floating green"><i className="material-icons btn  modal-trigger image">Image</i></button ></li>
                <li><button data-target="modalVideo" onClick = {props.handlerPostType} className="btn-floating red"><i className="material-icons btn modal-trigger video">Video</i></button ></li>
            </ul>
        </div>

    );
};

