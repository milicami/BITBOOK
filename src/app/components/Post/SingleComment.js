import React, {Fragment} from 'react';

export const SingleComment = (props) => {

    return (
        <Fragment>
            <div className='container'>
            <ul className="collection">
                <li className="collection-item avatar">
                <div className='row'>
                    <img src={props.user.avatarUrl} alt="user-img" className="circle col s2" />
                    <p>{props.user.name}</p>
                    <p>{props.comment.body}</p>
                </div>
                </li>
            </ul>
            </div>
        </Fragment>
    );
};






