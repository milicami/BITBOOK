const baseEndpoint = 'http://bitbookapi.azurewebsites.net/api';
const postEndpoint = 'http://bitbookapi.azurewebsites.net/api/Posts';
const commentsEndpoint = 'http://bitbookapi.azurewebsites.net/api/Comments?postId=';
const userEndpoint = 'http://bitbookapi.azurewebsites.net/api/users';

const requestsHeader = {
    'Content-Type': 'application/json',
    'Key': 'bitbookdev',
    'SessionId': '2990B489-DB94-4AC1-ACDE-CDC9CC3EAEAE'
}

export { baseEndpoint, postEndpoint, requestsHeader, commentsEndpoint, userEndpoint }