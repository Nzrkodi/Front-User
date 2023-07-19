import Main from './Main.js'
import Other from './Other.js'

const baseurl = import.meta.env.VITE_GATE_SERVICE_URL
const endPoint = '/web/order'

export default {
  getAllList(userId) {
    return Main(baseurl).get(`${endPoint}?user_id=${userId}`, Other.tokenConfig())
  },

  upsert(payload) {
    return Main(baseurl).post('/laundry/order', payload, Other.tokenConfig())
  },

  getById(id) {
    return Main(baseurl).get(`${endPoint}/${id}`, Other.tokenConfig())
  },
}