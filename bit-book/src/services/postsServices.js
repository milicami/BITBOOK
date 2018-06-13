import { postEndpoint, requestsHeader } from '../shared/constants';
import { Post } from '../entities/Post';
import { getPost } from '../shared/APIService';

class PostsServices {

    fetchPost() {
        return getPost(postEndpoint)
            .then(myPostList => {
                return myPostList.map(post => {
                    return new Post(post.text, post.id, post.date, post.userId, post.imageUrl, post.userDisplayName, post.type, post.numOfComments)
                })
            })
            
    }
};

export const postsServices = new PostsServices;
