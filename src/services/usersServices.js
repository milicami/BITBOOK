import { userEndpoint, requestsHeader } from "../shared/constants";
import { get } from "./APIService";
import { User } from "../entities/User";

class UsersServices {

    fetchSingleUser(userId) {
        const urlUserEndpoint = (`${userEndpoint}/${userId}`);
        return get(urlUserEndpoint)
            .then(user => {
                return new User(user.userId, user.name, user.email, user.aboutShort, user.about, user.avatarUrl, user.postsCount, user.commentsCount)
            })
            .catch(error => {
                console.error(error);
                alert('No user to show.')
            })
    }

    fetchUsers() {
        return get(userEndpoint)
        .then(users => {
           return users.map(user => {
                return new User(user.id, user.name, "", user.aboutShort, "", user.avatarUrl, "", "", user.lastPostDate)
            })
        })
        .catch(error => {
            console.error(error);
            alert('No user to show.')
        })
    }
}
export const usersServices = new UsersServices;