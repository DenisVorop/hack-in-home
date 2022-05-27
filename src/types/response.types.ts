import { TDepartment, TTeacher, TUser } from "./types"

// *** LOGIN RESPONSE ***
export type TLoginDataResponse = {
    accessToken: string
    user: TUser | null
}

export type TLoginData = {
    data: TLoginDataResponse
}

// *** TEACHERS RESPONSE ***
export type TTeachersDataResponse = {
    data: TTeacher[]
}

// *** DEPARTMENTS RESPONSE ***
export type TDepartmentsDataResponse = {
    data: TDepartment[]
}
