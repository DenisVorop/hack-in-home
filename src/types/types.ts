export type TMessage = {
    user: string
    text: string
    file?: string
}

export type TGroup = {
    name: string
    headmen?: boolean
}

export type TUser = {
    email: string
    group: string
    id: number
    name: string
    direction: string
    number_book: string
    master: boolean,
    group_list: TGroup[]
}

export type TTeacher = {
    name: string
    degree: string
    phone: string
    email: string
    subjects: string
    department: string
    Img: string
    id: number
}

export type TDepartment = {
    department: string
    institute: string
    id?: number
    info: string
}

export type TAllQuestions = {
    question: string
}

export type TTeacherKoval = {
    id: number,
    fullName: string
}

export type TReferences = {
    question: string
    department?: string
    cabinet: string
    phone: string
}
