import axios from 'axios'

export const instance = axios.create({
  baseURL: 'http://adjnatec.ru:4000/api',
  withCredentials: true,
})
