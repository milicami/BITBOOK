import { postEndpoint, requestsHeader, commentsEndpoint, baseEndpoint } from '../shared/constants';
import { Post } from '../entities/Post';
import { getPost } from '../shared/APIService';
import { TextPost, VideoPost, ImagePost } from '../entities/Post';

class PostsServices {

    fetchPost() {
        return getPost(postEndpoint)
            .then(myPostList => {
                return myPostList.map(post => {
                    switch (post.type) {
                        case 'text':
                            return new TextPost(post.id, post.date, post.userId, post.userDisplayName, post.type, post.numOfComments, post.text)
                        case 'image':
                            return new ImagePost(post.id, post.date, post.userId, post.userDisplayName, post.type, post.numOfComments, post.imageUrl)
                        case 'video':
                            return new VideoPost(post.id, post.date, post.userId, post.userDisplayName, post.type, post.numOfComments, post.videoUrl)
                    }
                })
            })
            .catch(error => {
                console.error(error);
                alert('Something went wrong, try again later.')
            })

    }

    typeUrl = (type) => {
        let url = ''
        switch (type) {
            case 'text':
                return url = `${baseEndpoint}/TextPosts/`;
            case 'image':
                return url = `${baseEndpoint}/ImagePosts/`;
            case 'video':
                return url = `${baseEndpoint}/VideoPosts/`;
            default:
                return '...'
        }
        return url;

    }

    fetchSinglePost(type, singlePostId) {
        
        const urlEndpoint = `${this.typeUrl(type)}${singlePostId}`;
        return getPost(urlEndpoint)
           
    }
        
    fetchComments(postId) {
        
        return getPost(`${commentsEndpoint}${postId}`)
    }


};

export const postsServices = new PostsServices;
