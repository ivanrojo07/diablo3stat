import { get } from 'axios'
// Donde almacenamos el token
import store from '../store/index'
// Util de regiones, que devolvera el locale por defecto correspondiente a cada region
import { locales } from '../utils/regions'
// Variables protocol y host
import { PROTOCOL, HOST } from '../enviroment'

function getApiAccount ({ region, account }) {
    // Recurso al que vamos acceder
    const resource = `d3/profile/${account}/`
    // URL completa
    const API_URL = `${PROTOCOL}${region}${HOST}${resource}`
    // locale
    const locale = locales[region]

    // parametros
    // token de access (recuperado desde vuex en parametros)
    // locale
    const params = {
        access_token: store.state.oauth.accessToken,
        locale
    }

    // Retornamos el resultado de hacer la llamada a la API, es decir, una promesa
    // controlaemos con exito o error desde el componente
    return get(API_URL, { params })
}

export {
    getApiAccount
}
