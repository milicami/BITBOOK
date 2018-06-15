import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export const ImagePost = (props) => {

    const { type, id, imageUrl, commentsNum } = props.post


    return (

        <div className='container'>
            <div className="row">
                <div className="col s12">
                    <div className="card">
                        <div className="card-image">
                            <img src={imageUrl} alt='img' />
                        </div>
                        <div className="card-action">
                            <span>Image Post </span>
                            <Link to={`/post/${type}/${id}`}> {commentsNum === 0 ? "0" : commentsNum} comments</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
