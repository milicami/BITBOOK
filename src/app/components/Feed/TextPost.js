import React from 'react';
import { Link } from 'react-router-dom';

export const TextPost = (props) => {

    const { text, commentsNum } = props.post


    return (
        <div className='container'>
            <div className="row">
                <div className="col s12">
                    <div className="card">
                        <div className="card-image">
                            <p>{text}</p>
                        </div>
                        <div className="card-action">
                            <span>Text Post</span>
                            <Link to='/comments'>{commentsNum}Comments</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};