// import jwt_decode from 'jwt-decode'
import axios from 'axios'

import { TLoginData } from '../types/response.types'


const REACT_APP_API_URL = 'http://localhost:8000'


const $local = axios.create({
    withCredentials: true,
    baseURL: REACT_APP_API_URL,
})


export const loginApi = async (email: string, password: string) => {
    const { data }: TLoginData = await $local.post('/login', { email, password })
    localStorage.setItem('token', data.accessToken)
    localStorage.setItem('user', JSON.stringify(data.user))
    // console.log(jwt_decode(data.accessToken))
    return (data.user)
}
