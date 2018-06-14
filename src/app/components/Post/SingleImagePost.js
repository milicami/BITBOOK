import React from 'react';

export const SingleImagePost = (props) => {

    return (
        <div>
            <img src={props.post.imageUrl} />
        </div>
    );
}