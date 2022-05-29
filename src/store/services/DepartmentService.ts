import { TDepartment } from "../../types/types"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"

const baseUrl = 'http://localhost:8000'
// const baseUrl = 'https://hack-in-home.herokuapp.com'

export const departmentAPI = createApi({
    reducerPath: 'departmentApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    tagTypes: ['Department'],
    endpoints: (build) => ({
        createDepartment: build.mutation<TDepartment, TDepartment>({
            query: (department: TDepartment) => ({
                url: '/api_departments',
                method: 'POST',
                body: department,
            }),
            invalidatesTags: ['Department']
        }),
        updateDepartment: build.mutation<TDepartment, TDepartment>({
            query: (department: TDepartment) => ({
                url: `/api_departments/${department.id}`,
                method: 'PUT',
                body: department,
            }),
            invalidatesTags: ['Department']
        }),
        deleteDepartment: build.mutation<TDepartment, TDepartment>({
            query: (department: TDepartment) => ({
                url: `/api_departments/${department.id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Department']
        })
    })
})
