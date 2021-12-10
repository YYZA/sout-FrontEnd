import axios from 'axios'
import { getCookie } from './Cookie'

const accessToken = getCookie('x_auth')

export const instance = axios.create({
  baseURL: 'http://3.36.100.253/',
  headers: {
    'content-type': 'application/json;charset=UTF-8',
    accept: 'application/json,',
    authorization: `${accessToken}`,
  },
})
