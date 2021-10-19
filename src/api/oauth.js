import { post } from 'axios'
import { API_URL } from '../enviroment'

const clientId = process.env.VUE_APP_CLIENT_ID
const clientSecret = process.env.VUE_APP_CLIENT_SECRET
function getToken () {
    const body = new FormData()

    body.append('grant_type', 'client_credentials')

    const config = {
        headers: { 'Content-Type': 'multipart/form-data' },
        auth: { username: clientId, password: clientSecret }
    }
    return post(API_URL, body, config)
}

export {
    getToken
}
