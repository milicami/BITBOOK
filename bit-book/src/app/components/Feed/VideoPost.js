import React from 'react';
import { Link } from 'react-router-dom';


export const VideoPost = (props) => {
    const { videoUrl, commentsNum } = props.post


    return (

        <div className='container'>
            <div className="row">
                <div className="col s12">
                    <div className="card">
                        <div className="card-image">
                            <iframe width='100%' src={videoUrl} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                        </div>
                        <div className="card-action">
                            <a href='!#'>Image Post</a>
                            <Link to='/comments'>{commentsNum}Comments</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};