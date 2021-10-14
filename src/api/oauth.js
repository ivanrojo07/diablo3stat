import { post } from 'axios'
import { API_URL, CLIENT_ID, CLIENT_SECRET } from '../enviroment'

function getToken () {
    const body = new FormData()

    body.append('grant_type', 'client_credentials')

    const config = {
        headers: { 'Content-Type': 'multipart/form-data' },
        auth: { username: CLIENT_ID, password: CLIENT_SECRET }
    }
    return post(API_URL, body, config)
}

export {
    getToken
}
