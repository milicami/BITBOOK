import React, { Fragment } from 'react';
import '../../../css/singleComment.css'

export const SingleComment = (props) => {


    const showDate = (input) => {
        const date = new Date(input);
        const newDate = `date:${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}.`;
        return newDate;
    }

    const showDate1 = (input) => {
        const date = new Date(input);
        const newDate = `posted at: ${date.getHours()}:${date.getMinutes()}h`;
        return newDate;
    }

    return (
        <div className='container'>
            <ul className="collection">
                <li className="collection-item">
                    <div className="row">
                        <div className="col s12">
                            <div className="col s2">
                                <img src={props.user.avatarUrl} alt="user-img" className="circle responsive-img avatar-img" />
                            </div>
                            <div className="col s9">{props.user.name}</div>
                        </div>
                        <div className="col s8">
                            <p>{props.comment.body}</p>
                        </div>
                        <div className="col s2">
                            <br />
                            <p className="right">{showDate(props.comment.dateCreated)}</p>
                            <p className="right">{showDate1(props.comment.dateCreated)}</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
};






