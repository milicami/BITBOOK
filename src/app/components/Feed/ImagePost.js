import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import feedPage from  "../../../css/feedPage.css";


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
                        <div className="row card-action">
                            <span className=" col s6 offset s2 ">Image Post </span>
                            <span className=" 'col s6 offset s2 "><Link to={`/post/${type}/${id}`} > {commentsNum === 0 ? "0" : commentsNum} comments</Link></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
