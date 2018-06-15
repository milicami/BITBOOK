import React from 'react';

export const SingleImagePost = (props) => {

    return (
        <div className="singleImagePost">
            <img src={props.post.imageUrl} />
        </div>
    );
}