import { configureStore, combineReducers } from '@reduxjs/toolkit'
import authReducer from './reducers/authSlice'
import teachersReducer from './reducers/teachersSlice'
import departmentsReducer from './reducers/departmentsSlice'

const rootReducer = combineReducers({
    authReducer,
    teachersReducer,
    departmentsReducer,
})

export const setupStore = () => configureStore({ reducer: rootReducer })

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
