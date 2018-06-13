import React from 'react';
import { Link } from 'react-router-dom';

export const TextPost = (props) => {
    return (
        <div class="row">
            <div class="col s12 m6">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                        <p>{props.post.text}}</p>
                    </div>
                    <div class="card-action">
                        <a href="!#">Text Post</a>
                        <Link to='/comments'>{props.post.commentsNum}Comments</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};