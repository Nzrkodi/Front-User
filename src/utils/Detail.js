import Main from './Main.js'

const baseurl = import.meta.env.VITE_GATE_SERVICE_URL
const endPoint = '/laundry/detail_order'

export default {
  getAllList(params) {
    return Main(baseurl).get(`${endPoint}?search=${params.search}&limit=${params.limit}&page=${params.page}&orderBy=${params.orderBy}&sort=${params.sort}&order_id=${params.order_id}`)
  },

  upsert(payload) {
    return Main(baseurl).post(endPoint, payload)
  },

  getById(id) {
    return Main(baseurl).get(`${endPoint}/${id}`)
  },

  delete(id) {
    return Main(baseurl).delete(`${endPoint}/${id}`)
  }
}