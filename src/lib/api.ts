import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://exp://localhost:3333',
})
