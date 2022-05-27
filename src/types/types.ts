export type TMessage = {
    user: string
    text: string
    file?: string
}

export type TUser = {
    email: string
    group: string
    id: number
    name: string
    direction: string
    number_book: string
}

export type TTeacher = {
    name: string
    degree: string
    phone: string
    email: string
    subjects: string
    department: string
    Img: string
}

export type TDepartment = {
    department: string
    institute: string
    id: number
    info: string
}
