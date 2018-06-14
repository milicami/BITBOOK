const baseEndpoint = 'http://bitbookapi.azurewebsites.net';
const postEndpoint = 'http://bitbookapi.azurewebsites.net/api/Posts';
const textPostEndpoint = 'http://bitbookapi.azurewebsites.net/api/TextPosts';
const imagePostEndpoint = 'http://bitbookapi.azurewebsites.net/api/ImagePosts';
const videoPostEndpoint = 'http://bitbookapi.azurewebsites.net/api/VideoPosts';


const requestsHeader = {
    'Content-Type': 'application/json',
    'Key': 'bitbookdev',
    'SessionId': '2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE'
}

export { baseEndpoint, postEndpoint, requestsHeader }