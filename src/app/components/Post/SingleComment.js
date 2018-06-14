import React, {Fragment} from 'react';

export const SingleComment = (props) => {

    console.log(props.comment.comment)

    return (
        <Fragment>
            <ul className="collection">
                <li className="collection-item avatar">
                    <img src="images/yuna.jpg" alt="" className="circle" />
                    <p> {props.comment.body}</p>
                    <a href="#!" className="secondary-content"></a>
                </li>
            </ul>
        </Fragment>
    );
};






