import React, { Fragment } from 'react';
import { TextPost } from './TextPost';
import { VideoPost } from './VideoPost';
import { ImagePost } from './ImagePost';


export const FeedList = (props) => {
    
    const showPosts = () => {
        const myPosts = props.posts.map((post) => {
            return <TextPost post={post}/>
        }
    )
    return myPosts;
}
    return (
        <Fragment>

            <div className='container'> 

                {props.posts === 0
                    ? <p>nothing in feed</p>
                    : (props.posts.map((post, i) => {

                        switch (post.type) {
                            case 'text':
                                return <TextPost post={post} key={i} />
                                break;
                            case 'image':
                                return <ImagePost post={post} key={i} />
                                break;
                            case 'video':
                                return <VideoPost post={post} key={i} />;
                                break;
                            default:
                                return <p>error</p>
                                break;
                        }
                    }))}
            </div>
        </Fragment>
    );
};