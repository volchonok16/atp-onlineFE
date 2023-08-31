import axios from 'axios'

export const instance = axios.create({
  baseURL: 'http://adjnatech.ru:4500/api',
  withCredentials: true,
})
