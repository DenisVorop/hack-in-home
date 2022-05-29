// import jwt_decode from 'jwt-decode'
import axios from 'axios'

import { TDepartmentsDataResponse } from '../types/response.types'
import { REACT_APP_API_URL } from './loginApi'


// const REACT_APP_API_URL = ''


const $local = axios.create({
    withCredentials: true,
    baseURL: REACT_APP_API_URL,
})


export const departmentApi = async () => {
    const { data }: TDepartmentsDataResponse = await $local.get(`/api_departments`)
    return (data)
}
