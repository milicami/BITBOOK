import React from 'react';
import { Link } from 'react-router-dom';

export const TextPost = (props) => {

    const { text,type, id, commentsNum } = props.post


    return (
        <div className='container'>
            <div className="row">
                <div className="col s12">
                    <div className="card">
                        <div className="card-image">
                            <p>{text}</p>
                        </div>
                        <div className="card-action">
                            <span><Link to={`/post/${type}/${id}`}>Text Post </Link></span>
                            <Link to="">{commentsNum}Comments</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};