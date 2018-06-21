import { photoUploadEndpoint } from "../shared/constants";

class UploadServices {

    uploadUserPicture(imageFile) {
        console.log(imageFile);
        const formData = new FormData();
        formData.append('file', imageFile)

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

export const uploadServices = new UploadServices;