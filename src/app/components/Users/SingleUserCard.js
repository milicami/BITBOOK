import React, { Component, Fragment } from 'react';

export const SingleUser = (props) => {

    return (
        <li className="collection-item avatar">
            <img src={props.myUser.avatarUrl ? props.myUser.avatarUrl : "http://via.placeholder.com/100x100"} alt="" className="circle" />
            <p>{props.myUser.name}<br />
                {props.myUser.aboutShort}
            </p>
            <p className="right">{props.myUser.getTimeForLastPostDate()}</p> 
        </li>
    )
}