const baseEndpoint = 'http://bitbookapi.azurewebsites.net/api';
const postEndpoint = 'http://bitbookapi.azurewebsites.net/api/Posts';
const commentsEndpoint = 'http://bitbookapi.azurewebsites.net/api/Comments?postId=';
const newCommentEndpoint = "http://bitbookapi.azurewebsites.net/api/Comments";
const userEndpoint = 'http://bitbookapi.azurewebsites.net/api/users';
const textPostEndpoint = 'http://bitbookapi.azurewebsites.net/api/TextPosts';
const imagePostEndpoint = 'http://bitbookapi.azurewebsites.net/api/ImagePosts';
const videoPostEndpoint = 'http://bitbookapi.azurewebsites.net/api/VideoPosts';
const profileEndpoint = 'http://bitbookapi.azurewebsites.net/api/profile';
const userEditProfileEndpoint = 'http://bitbookapi.azurewebsites.net/api/Profiles';
const registerEndpoint = "http://bitbookapi.azurewebsites.net/api/register";




const requestsHeader = {
    'Content-Type': 'application/json',
    'Key': 'bitbookdev',
    'SessionId': '2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE'
}

const registerHeader = {
    "pragma": "no-cache",
    "date": "Tue, 19 Jun 2018 15:46:47 GMT",
    "server": "Microsoft-IIS/10.0",
    "x-aspnet-version": "4.0.30319",
    "x-powered-by": "ASP.NET",
    "cache-control": "no-cache",
    "content-length": "0",
    "expires": "-1",
    "content-type": null
}

export { baseEndpoint, postEndpoint, requestsHeader, commentsEndpoint, userEndpoint, newCommentEndpoint, textPostEndpoint, imagePostEndpoint, videoPostEndpoint, profileEndpoint, userEditProfileEndpoint, registerEndpoint, registerHeader }