export class Post {
    constructor(text, id, date, userId, imageUrl,userDisplayName, type, numOfComments) {
        this.text = text;
        this.id = id;
        this.date = date;
        this.userId = userId;
        this.imageUrl = imageUrl;
        this.userDisplayName = userDisplayName;
        this.type =type;
        this.numOfComments = numOfComments;
    }
}

