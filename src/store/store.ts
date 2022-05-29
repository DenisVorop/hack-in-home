import { departmentAPI } from './services/DepartmentService';
import { teacherAPI } from './services/TeacherService';
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import authReducer from './reducers/authSlice'
import teachersReducer from './reducers/teachersSlice'
import departmentsReducer from './reducers/departmentsSlice'

const rootReducer = combineReducers({
    authReducer,
    teachersReducer,
    departmentsReducer,
    [teacherAPI.reducerPath]: teacherAPI.reducer,
    [departmentAPI.reducerPath]: departmentAPI.reducer,
})

export const setupStore = () => configureStore({ reducer: rootReducer })

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
