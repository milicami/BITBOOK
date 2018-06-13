import { postEndpoint, requestsHeader } from '../shared/constants';
import { apiService } from '../shared/APIService';
import { Post } from '../entities/Post';

export class PostsServices {

    fetchPost() {
        return apiService.get(postEndpoint, requestsHeader)
            .then(myPostList => {
                return myPostList.map(post => {
                    return new Post(post.text, post.id, post.date, post.userId, post.userDisplayName, post.type, post.numOfComments)
                })
            })
            
    }
};