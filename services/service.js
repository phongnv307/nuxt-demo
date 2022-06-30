import axios from 'axios'

const apiClient = axios.create({
  baseURL: `https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getItems() {
    return apiClient.get()
  },
  getItem(id) {
    const items = apiClient.get()
    const data = JSON.parse(items)
    const item = data.find((o) => o.id === id)
    // eslint-disable-next-line no-console
    console.log(item)
    return item
  },
}
