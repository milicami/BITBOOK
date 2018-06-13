import React from 'react';
import { Link } from 'react-router-dom';

export const TextPost = (props) => {

    const { text, commentsNum } = props.post

    return (
        <div class="row">
            <div class="col s12">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                        <p>{text}</p>
                    </div>
                    <div class="card-action">
                        <a href="!#">Text Post</a>
                        <Link to='/comments'>{commentsNum}Comments</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};