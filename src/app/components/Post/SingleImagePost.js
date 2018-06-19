import React from 'react';
import feedPage from "../../../css/feedPage.css";
export const SingleImagePost = (props) => {

    return (
        <div className="singleImagePost">
            <img className="singleImage" src={props.post.imageUrl} />
        </div>
    );
}