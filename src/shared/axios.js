import axios from 'axios'
import { getCookie } from './Cookie'

const instance = axios.create({
  baseURL: 'http://3.36.100.253/',
  headers: {
    'content-type': 'application/json;charset=UTF-8',
    accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
    Authorization: `${getCookie('x_auth')}`,
  },
})

export const apis = {
  signup: (email, nickname, interest, password) =>
    instance.post('/user/signup', {
      email,
      nickname,
      interest,
      password,
    }),
}
