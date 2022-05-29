import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TTeacher, TTeacherKoval } from '../../types/types';

interface TeachersState {
    teachers: TTeacher[] | null
    teachersKoval: TTeacherKoval[] | null
    isLoading: boolean
    error: string
}

const initialState: TeachersState = {
    teachers: null,
    isLoading: false,
    error: '',
    teachersKoval: null,
}

export const teachersSlice = createSlice({
    name: 'teachers',
    initialState,
    reducers: {
        fetchTeachers(state) {
            state.isLoading = true
        },
        fetchTeachersSuccess(state, action: PayloadAction<TTeacher[]>) {
            state.isLoading = false
            state.error = ''
            if (state.teachers) {
                state.teachers = [...state.teachers as TTeacher[], ...action.payload]
            } else {
                state.teachers = action.payload
            }
        },
        fetchTeachersError(state, action: PayloadAction<string>) {
            state.isLoading = false
            state.error = action.payload
        },
        zeroingTeachers(state) {
            state.teachers = null
            state.teachersKoval = null
        },
        fetchTeachersOfDepartment(state, action: PayloadAction<TTeacher[]>) {
            state.isLoading = false
            state.error = ''
            state.teachers = action.payload
        },
        fetchTeachersKoval(state, action: PayloadAction<TTeacherKoval[]>) {
            state.teachersKoval = action.payload
        }
    }
})

export default teachersSlice.reducer
