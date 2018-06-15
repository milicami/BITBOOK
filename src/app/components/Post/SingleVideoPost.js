import React from 'react';

export const SingleVideoPost = (props) => {

    return (
        <div className="singleVideoPost">
         <iframe width='100%' src={props.post.videoUrl} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
        </div>
    );
}