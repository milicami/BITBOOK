import React from 'react';

export const SingleUser = (props) => {

    return (
        <li className="collection-item avatar">
            <img src={props.myUser.avatarUrl} alt="" className="circle" />
            <p>{props.myUser.name}<br />
                {props.myUser.aboutShort}
                <span className="right">{props.myUser.getTimeForLastPostDate()}</span>
            </p>
        </li>
    )
}