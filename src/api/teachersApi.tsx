import axios from 'axios'

import { TTeachersDataResponse } from '../types/response.types'
import { REACT_APP_API_URL } from './loginApi'

// const REACT_APP_API_URL = ''
const REACT_APP_KOVAL = 'https://rinh-api.kovalev.team/employee/surname'


const $local = axios.create({
    withCredentials: true,
    baseURL: REACT_APP_API_URL,
})

const $koval = axios.create({
    withCredentials: true,
    baseURL: REACT_APP_KOVAL,
})


export const teachersApi = async (limit: number, page: number, department: string = '') => {
    const { data }: TTeachersDataResponse = await $local.get(`/api_teachers?_limit=${limit}&_page=${page}&department_like=${department}`)
    return (data)
}

export const teacherApiKoval = async (name:string) => {
    const { data } = await $koval.get(`/${name}`)
    return (data)
}
