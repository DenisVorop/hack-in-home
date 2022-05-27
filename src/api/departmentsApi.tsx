// import jwt_decode from 'jwt-decode'
import axios from 'axios'

import { TDepartmentsDataResponse } from '../types/response.types'


const REACT_APP_API_URL = 'http://localhost:8000'


const $local = axios.create({
    withCredentials: true,
    baseURL: REACT_APP_API_URL,
})


export const departmentApi = async () => {
    const { data }: TDepartmentsDataResponse = await $local.get(`/api_departments`)
    return (data)
}
