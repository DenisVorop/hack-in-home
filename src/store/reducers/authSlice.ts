import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TUser } from '../../types/types';

interface UserState {
    user: TUser | null
    isLoading: boolean
    error: string
    isAuth: boolean
}

const initialState: UserState = {
    user: null,
    isLoading: false,
    error: '',
    isAuth: false,
}

export const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login(state) {
            state.isLoading = true
        },
        loginSuccess(state, action: PayloadAction<TUser | null>) {
            state.isLoading = false
            state.error = ''
            state.user = action.payload
            state.isAuth = true
        },
        loginError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        },
        logout(state) {
            state.user = null
            state.error = ''
            state.isAuth = false
        }
    }
})

export default authSlice.reducer
