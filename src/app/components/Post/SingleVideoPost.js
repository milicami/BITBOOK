import React from 'react';

export const SingleVideoPost = (props) => {

    return (
        <div className="singleVideoPost responsive-video">
            <div className='row container'>
            <div className=' video-container'>
                <iframe width='853px' height='480px' src={props.post.videoUrl} frameBorder="0" allowFullScreen></iframe>
            </div>
            </div>
        </div>
    );
}