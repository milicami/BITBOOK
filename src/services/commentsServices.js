import { commentsEndpoint, requestsHeader } from '../shared/constants';
import { get } from '../shared/APIService';

class CommentsServices {

    
    fetchComments(postId) {
            
        return get(`${commentsEndpoint}${postId}`)
    }
}

export const commentsServices = new CommentsServices;