import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://exp://192.168.1.69:3333',
})
