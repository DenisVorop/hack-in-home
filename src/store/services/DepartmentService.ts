import { TDepartment } from "../../types/types"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
import { REACT_APP_API_URL } from "../../api/loginApi"

// const baseUrl = ''

export const departmentAPI = createApi({
    reducerPath: 'departmentApi',
    baseQuery: fetchBaseQuery({ baseUrl: REACT_APP_API_URL }),
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
