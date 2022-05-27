import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TDepartment } from '../../types/types';

interface DepartmentsState {
    departments: TDepartment[] | null
    isLoading: boolean
    error: string
}

const initialState: DepartmentsState = {
    departments: null,
    isLoading: false,
    error: '',
}

export const departmentsSlice = createSlice({
    name: 'teachers',
    initialState,
    reducers: {
        fetchDepartments(state) {
            state.isLoading = true
        },
        fetchDepartmentsSuccess(state, action: PayloadAction<TDepartment[]>) {
            state.isLoading = false
            state.error = ''
                state.departments = action.payload
        },
        fetchDepartmentsError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export default departmentsSlice.reducer
