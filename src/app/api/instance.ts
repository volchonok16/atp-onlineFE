import axios from 'axios'

export const instance = axios.create({
  baseURL: 'http://adjnatec.ru:4001/api',
  withCredentials: true,
})
