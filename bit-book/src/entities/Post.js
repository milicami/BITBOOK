export class Post {
    constructor(id, date, userId, userDisplayName, type, numOfComments) {
        this.id = id;
        this.date = date;
        this.userId = userId;
        this.userDisplayName = userDisplayName;
        this.type = type;
        this.numOfComments = numOfComments;
    }
}

export class TextPost extends Post {
    constructor(id, date, userId, userDisplayName, type, numOfComments, text) {
        super(id, date, userId, userDisplayName, type, numOfComments)

        this.text = text;
    }

}


export class ImagePost extends Post {
    constructor(id, date, userId, userDisplayName, type, numOfComments, imageUrl) {
        super(id, date, userId, userDisplayName, type, numOfComments)

        this.imageUrl = imageUrl;
    }

}


export class VideoPost extends Post {
    constructor(id, date, userId, userDisplayName, type, numOfComments, videoUrl) {
        super(id, date, userId, userDisplayName, type, numOfComments)

        this.videoUrl = videoUrl;
    }

}



