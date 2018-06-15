export class Post {
    constructor(id, date, userId, userDisplayName, type, commentsNum) {
        this.id = id;
        this.date = date;
        this.userId = userId;
        this.userDisplayName = userDisplayName;
        this.type = type;
        this.commentsNum = commentsNum;
    }
}

export class TextPost extends Post {
    constructor(id, date, userId, userDisplayName, type, commentsNum, text) {
        super(id, date, userId, userDisplayName, type, commentsNum)

        this.text = text;
    }

}


export class ImagePost extends Post {
    constructor(id, date, userId, userDisplayName, type, commentsNum, imageUrl) {
        super(id, date, userId, userDisplayName, type, commentsNum)

        this.imageUrl = imageUrl;
    }

}


export class VideoPost extends Post {
    constructor(id, date, userId, userDisplayName, type, commentsNum, videoUrl) {
        super(id, date, userId, userDisplayName, type, commentsNum)

        this.videoUrl = videoUrl;
    }

}



