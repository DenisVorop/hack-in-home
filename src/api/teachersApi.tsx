import axios from 'axios'

import { TTeachersDataResponse } from '../types/response.types'

const REACT_APP_API_URL = 'http://localhost:8000'


const $local = axios.create({
    withCredentials: true,
    baseURL: REACT_APP_API_URL,
})


export const teachersApi = async (limit: number, page: number, department: string = '') => {
    const { data }: TTeachersDataResponse = await $local.get(`/api_teachers?_limit=${limit}&_page=${page}&department_like=${department}`)
    return (data)
}
