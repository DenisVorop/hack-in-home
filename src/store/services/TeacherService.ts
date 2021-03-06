import { TTeacher } from '../../types/types';
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"

// const baseUrl = ''
const baseUrl = 'http://localhost:8000'
// const baseUrl = 'https://hack-in-home.herokuapp.com'

export const teacherAPI = createApi({
    reducerPath: 'teacherApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    tagTypes: ['Teacher'],
    endpoints: (build) => ({
        createTeacher: build.mutation<TTeacher, TTeacher>({
            query: (teacher: TTeacher) => ({
                url: '/api_teachers',
                method: 'POST',
                body: teacher,
            }),
            invalidatesTags: ['Teacher']
        }),
        updateTeacher: build.mutation<TTeacher, TTeacher>({
            query: (teacher: TTeacher) => {
                debugger
                return ({
                url: `/api_teachers/${teacher.id}`,
                method: 'PUT',
                body: teacher,
            })},
            invalidatesTags: ['Teacher']
        }),
        deleteTeacher: build.mutation<TTeacher, TTeacher>({
            query: (teacher: TTeacher) => ({
                url: `/api_teachers/${teacher.id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Teacher']
        })
    })
})
