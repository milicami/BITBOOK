import React, { Fragment } from 'react';
import { TextPost } from './TextPost';
import { VideoPost } from './VideoPost';
import { ImagePost } from './ImagePost';
import { Loader } from '../../partials/Loader';
import "materialize-css";


export const FeedList = (props) => {


    const renderPosts = (posts) => {

        if (posts.length === 0) {
            return <Loader />
        } else {
            return posts.map((post, key) => {
                switch (post.type) {
                    case 'text':
                        return <TextPost post={post} key={key} onSuccessfulDelete={props.onSuccessfulDelete} />
                    case 'image':
                        return <ImagePost post={post} key={key} onSuccessfulDelete={props.onSuccessfulDelete} />
                    case 'video':
                        return <VideoPost post={post} key={key} onSuccessfulDelete={props.onSuccessfulDelete}/>;
                    default:
                        return <p>not valid type of input</p>
                }
            })
        }
    }


    return (
        <Fragment>
            <div className='container'>
                {renderPosts(props.posts)}
            </div>
        </Fragment>
    );
};