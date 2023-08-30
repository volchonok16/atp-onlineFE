import axios from 'axios'

export const instance = axios.create({
  //baseURL: 'http://localhost:4500/api/', // для локальной разработки
  baseURL: 'http://77.222.53.21:4500/api/',
  withCredentials: true,
})
