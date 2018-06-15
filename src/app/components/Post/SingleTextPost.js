import React from 'react';

export const SingleTextPost = (props) => {

    return (
        <div className="singleTextPost">
            {props.post.text}
        </div>
    );
}