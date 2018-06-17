export class User {
    constructor(userId, name, email, aboutShort, about, avatarUrl, postsCount, commentsCount, lastPostDate) {
        this.userId = userId;
        this.name = name;
        this.email = email;
        this.aboutShort = aboutShort;
        this.about = about;
        this.avatarUrl = avatarUrl;
        this.postsCount = postsCount;
        this.commentsCount = commentsCount;
        this.lastPostDate = lastPostDate
    }
}