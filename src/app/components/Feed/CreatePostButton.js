import React from 'react';
import M from "materialize-css/dist/css/materialize.css"


export const CreatePostButton = (props) => {

    return (

        <div className="fixed-action-btn">
            <a className="btn-floating btn-large red">
                <i className="material-icons">add</i>
            </a>
            <ul>
                <li><button data-target="modalPost" onClick={props.handlerPostType} className="btn-floating"><i className="material-icons btn #4fc3f7 light-blue lighten-2  modal-trigger post">Text</i></button ></li>
                <li><button data-target="modalImage" onClick={props.handlerPostType} className="btn-floating"><i className="material-icons btn #1de9b6 teal accent-3 modal-trigger image">Image</i></button ></li>
                <li><button data-target="modalVideo" onClick={props.handlerPostType} className="btn-floating"><i className="material-icons btn #dd2c00 deep-orange accent-4 modal-trigger video">Video</i></button ></li>
            </ul>
        </div>

    );
};
