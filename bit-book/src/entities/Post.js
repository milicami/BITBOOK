export class Post {
    constructor(text, id, date, userId, imageUrl, videoUrl, userDisplayName, type, numOfComments) {
        this.text = text;
        this.id = id;
        this.date = date;
        this.userId = userId;
        this.imageUrl = imageUrl;
        this.videoUrl = videoUrl;
        this.userDisplayName = userDisplayName;
        this.type =type;
        this.numOfComments = numOfComments;
    }
}

