import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://ecommerce-hackiv.herokuapp.com'
})

export default instance
