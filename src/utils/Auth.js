import Main from './Main.js'

const baseurl = import.meta.env.VITE_GATE_SERVICE_URL
const endPoint = '/v1/oauth'

export default {
  getScope(payload){
    return Main(baseurl).get(`${endPoint}/getscope?username=${payload.username}`)
  },
  getToken(payload) {
    return Main(baseurl).post(`${endPoint}/token`, payload)
  }
}