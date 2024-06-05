import axios from 'axios'
import { Cookies } from 'react-cookie'

const http = axios.create({
  baseURL: import.meta.env.VITE_PORT_BE,
  headers: {
    'Content-type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
})

http.interceptors.request.use(
  (config) => {
    const cookies = new Cookies()
    const token = cookies.get('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default http
