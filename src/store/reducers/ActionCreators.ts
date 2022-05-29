import { AppDispatch } from './../store';
import { TUser, TDepartment, TTeacher, TTeacherKoval } from './../../types/types';

import { authSlice } from './authSlice';
import { teachersSlice } from './teachersSlice';
import { departmentsSlice } from './departmentsSlice';

import { teacherApiKoval, teachersApi } from '../../api/teachersApi';
import { loginApi } from '../../api/loginApi';
import { departmentApi } from '../../api/departmentsApi';


// *** LOGIN ***
export const loginFetch = (login: string, password: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(authSlice.actions.login())
        const response = await loginApi(login, password)
        dispatch(authSlice.actions.loginSuccess(response))
    } catch (e: any) {
        if (e.message === "Request failed with status code 400")
            return dispatch(authSlice.actions.loginError('Неправильный логин или пароль'))
        return dispatch(authSlice.actions.loginError(e.message))
    }
}

export const logoutFetch = () => (dispatch: AppDispatch) => {
    dispatch(authSlice.actions.logout())
}

// *** CHECK LOGIN ***
export const checkLogin = () => (dispatch: AppDispatch) => {
    const token: string | null = localStorage.getItem('token')
    const user: TUser = JSON.parse(localStorage.getItem('user')!)

    if (token && user)
        dispatch(authSlice.actions.loginSuccess(user))
}

// *** TEACHERS ***
export const fetchTeachersData = (limit: number, page: number) => async (dispatch: AppDispatch) => {
    try {
        const response = await teachersApi(limit, page)
        dispatch(teachersSlice.actions.fetchTeachers())
        dispatch(teachersSlice.actions.fetchTeachersSuccess(response as TTeacher[]))
    } catch (e: any) {
        return dispatch(teachersSlice.actions.fetchTeachersError(e.message))
    }
}

export const fetchTeachersOfDepartmentData = (department: string) => async (dispatch: AppDispatch) => {
    try {
        const response = await teachersApi(10000, 1, department)
        dispatch(teachersSlice.actions.fetchTeachers())
        dispatch(teachersSlice.actions.fetchTeachersOfDepartment(response as TTeacher[]))
    } catch (e: any) {
        return dispatch(teachersSlice.actions.fetchTeachersError(e.message))
    }
}

export const deleteTeachers = () => (dispatch: AppDispatch) => {
    dispatch(teachersSlice.actions.zeroingTeachers())
}

export const fetchTeachersKovalData = (name: string) => async (dispatch: AppDispatch) => {
    try {
        const response = await teacherApiKoval(name)
        dispatch(teachersSlice.actions.fetchTeachersKoval(response as TTeacherKoval[]))
    } catch (e: any) {
        return dispatch(teachersSlice.actions.fetchTeachersError(e.message))
    }
}

// *** DEPARTMENTS ***
export const fetchDepartmentsData = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(departmentsSlice.actions.fetchDepartments())
        const response = await departmentApi()
        dispatch(departmentsSlice.actions.fetchDepartmentsSuccess(response as TDepartment[]))
    } catch (e: any) {
        return dispatch(departmentsSlice.actions.fetchDepartmentsError(e.message))
    }
}
