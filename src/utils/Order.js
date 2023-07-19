import Main from './Main.js'

const baseurl = import.meta.env.VITE_GATE_SERVICE_URL
const endPoint = '/laundry/order'

export default {
  getAllList(params) {
    return Main(baseurl).get(`${endPoint}?search=${params.search}&limit=${params.limit}&page=${params.page}&orderBy=${params.orderBy}&sort=${params.sort}`)
  },

  upsert(payload) {
    return Main(baseurl).post(endPoint, payload)
  },

  getById(id) {
    return Main(baseurl).get(`${endPoint}/${id}`)
  },

  setStatus(id) {
    return Main(baseurl).get(`/laundry/status/${id}`)
  },


  delete(id) {
    return Main(baseurl).delete(`${endPoint}/${id}`)
  }
}