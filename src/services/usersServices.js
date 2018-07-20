import { userEndpoint, profileEndpoint, userEditProfileEndpoint, registerEndpoint, loginEndpoint } from "../shared/constants";
import { get, post, put } from "./APIService";
import { User } from "../entities/User";

class UsersServices {

    fetchSingleUser(userId) {
        const urlUserEndpoint = (`${userEndpoint}/${userId}`);
        return get(urlUserEndpoint)
            .then(user => {
                return new User(user.userId, user.name, user.email, user.aboutShort, user.about, user.avatarUrl, user.postsCount, user.commentsCount)
            })
    }

    fetchUsers() {
        return get(userEndpoint)
            .then(users => {
                return users.map(user => {
                    return new User(user.id, user.name, "", user.aboutShort, "", user.avatarUrl, "", "", user.lastPostDate)
                })
            })
        }

    fetchProfile() {
        return get(profileEndpoint)
            .then(profile => {
                return new User(profile.userId, profile.name, profile.email, profile.aboutShort, profile.about, profile.avatarUrl, profile.postsCount, profile.commentsCount)
            })
    }

    registerUser = (newUser) => {
        return post(registerEndpoint, newUser)
    }

    loginUser = (loginUser) => {
        return post(loginEndpoint, loginUser)
    }


    updateUserProfile(name, about, photo) {

        const updateData = {
            name: name,
            email: 'bitStudent@gmail.com',
            aboutShort: about,
            about: about,
            avatarUrl: photo,
            postsCount: 0,
            commentsCount: 0
        }

        return put(userEditProfileEndpoint, updateData)
    }

}


export const usersServices = new UsersServices();