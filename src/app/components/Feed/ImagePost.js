import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export const ImagePost = (props) => {
   
    const {type, id, imageUrl, commentsNum} = props.post

    
    return (

        <div className='container'>
            <div className="row">
                <div className="col s12">
                    <div className="card">
                        <div className="card-image">
                            <img src={imageUrl} alt='img'/>
                        </div>
                        <div className="card-action">
                            <span><Link to={`/post/${type}/${id}`}>Image Post </Link></span>
                            <Link to={`/post/${type}/${id}`}>{commentsNum}Comments</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
