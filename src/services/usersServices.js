import { userEndpoint, requestsHeader, profileEndpoint } from "../shared/constants";
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

    fetchProfile() {
        return get(profileEndpoint)
            .then((profile) => {
                return new User(profile.userId, profile.name, profile.email, profile.aboutShort, profile.about, profile.avatarUrl, profile.postsCount, profile.commentsCount)
            })
            .catch(error => {
                console.error(error);
                alert('No profile to show.')
            })
    }
}




export const usersServices = new UsersServices;