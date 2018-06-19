import { userEndpoint, requestsHeader, profileEndpoint, userEditProfileEndpoint, photoUploadEndpoint } from "../shared/constants";
import { get, put, post } from "./APIService";
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

    fetchProfile() {
        return get(profileEndpoint)
            .then(profile => {
                return new User(profile.userId, profile.name, profile.email, profile.aboutShort, profile.about, profile.avatarUrl, profile.postsCount, profile.commentsCount)
            })
            .catch(error => {
                console.error(error);
                alert('No profile to show.')
            })

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

    uploadUserPicture(photo) {
        
        const formData = new FormData();
        formData.append('file', photo)

        return fetch(photoUploadEndpoint, {
            body: formData,
            headers: {
                'Key': 'bitbookdev',
                'SessionId': '2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE'
            },
            method: 'POST'
        })
            .then(response => response.json())


    }

}


export const usersServices = new UsersServices;