import React from 'react';
import PopupDepartment from '../../components/Popups/PopupDepartment/PopupDepartment';
import PopupMaster from '../../components/Popups/PopupMaster/PopupMaster';
import useInput from '../../hooks/useInput';
import { useAppDispatch, useAppSelector } from '../../store/hooks/redux';
import { deleteTeachers, fetchDepartmentsData, fetchTeachersData } from '../../store/reducers/ActionCreators';

import { departmentAPI } from '../../store/services/DepartmentService';
import { teacherAPI } from '../../store/services/TeacherService';

import search from '../../assets/images/search.svg'

import './master.scss'

import { TDepartment, TTeacher } from '../../types/types';

const Master: React.FC = () => {
    const { teachers } = useAppSelector(state => state.teachersReducer)
    const { departments } = useAppSelector(state => state.departmentsReducer)
    const dispatch = useAppDispatch()

    const [deleteTeacher, { }] = teacherAPI.useDeleteTeacherMutation()
    const [updateTeacher, { }] = teacherAPI.useUpdateTeacherMutation()

    const [deleteDepartment, { }] = departmentAPI.useDeleteDepartmentMutation()
    const [updateDepartment, { }] = departmentAPI.useUpdateDepartmentMutation()

    const [selectedTeacher, setSelectedTeacher] = React.useState<TTeacher[]>([] as TTeacher[])
    const { value: searchTeacherValue, reset: resetSearchTeacherValue, bind: bindSearchTeacherValue } = useInput('')
    const [fieldTeacherVisible, setFieldTeacherVisible] = React.useState<boolean>(false)

    const [selectedDepartment, setSelectedDepartment] = React.useState<TDepartment[]>([] as TDepartment[])
    const { value: searchDepartmentValue, reset: resetSearchDepartmentValue, bind: bindSearchDepartmentValue } = useInput('')
    const [fieldDepartmentVisible, setFieldDepartmentVisible] = React.useState<boolean>(false)

    React.useEffect(() => {
        dispatch(fetchTeachersData(1000, 1))
        dispatch(fetchDepartmentsData())
        return () => {
            dispatch(deleteTeachers())
        }
    }, [])

    React.useEffect(() => {
        if (teachers)
            setSelectedTeacher(teachers.filter(teacher => teacher.name.toLowerCase().includes(searchTeacherValue.toLowerCase())))
    }, [teachers, searchTeacherValue])

    React.useEffect(() => {
        if (departments)
            setSelectedDepartment(departments.filter(department => department.department.toLowerCase().includes(searchDepartmentValue.toLowerCase())))
    }, [departments, searchDepartmentValue])

    const handleRemoveTeacher = (teacher: TTeacher) => {
        deleteTeacher(teacher)
    }
    const handleUpdateTeacher = (teacher: TTeacher) => {
        updateTeacher(teacher)
    }

    const handleRemoveDepartment = (department: TDepartment) => {
        deleteDepartment(department)
    }

    const handleUpdateDepartment = (department: TDepartment) => {
        updateDepartment(department)
    }

    const [popupVisibleTeacher, setPopupVisibleTeacher] = React.useState<boolean>(false)
    const [popupVisibleDepartment, setPopupVisibleDepartment] = React.useState<boolean>(false)

    return (
        <div>
            <div className="master-update">
                <div className="master-update__body">
                    <div className="header__search master-update__search-teacher">
                        <img src={search} alt="search" />
                        <input type="text" {...bindSearchTeacherValue} placeholder='Найти преподавателя по ФИО' />
                    </div>
                    <div className="start-changes">
                        <div
                            className="master-update__show-teacher"
                            onClick={() => setFieldTeacherVisible(!fieldTeacherVisible)}
                        >
                            Показать / Скрыть
                        </div>
                        <div className='update-teacher' onClick={() => setPopupVisibleTeacher(true)}>Редактировать</div>
                    </div>
                    {fieldTeacherVisible && selectedTeacher.map((teacher, index) => {
                        if (index === 0) {
                            return (
                                <PopupMaster
                                    teacher={teacher}
                                    handleUpdateTeacher={handleUpdateTeacher}
                                    key={teacher.id}
                                    popupVisible={popupVisibleTeacher}
                                    setPopupVisible={setPopupVisibleTeacher}
                                />
                            )
                        }
                    })}
                </div>
                <div className="master-update__body">
                    <div className="header__search master-update__search-teacher">
                        <img src={search} alt="search" />
                        <input type="text"  {...bindSearchDepartmentValue} placeholder='Найти кафедру' />
                    </div>
                    <div className="start-changes">
                        <div
                            className="master-update__show-teacher"
                            onClick={() => setFieldDepartmentVisible(!fieldDepartmentVisible)}
                        >
                            Показать / Скрыть
                        </div>
                        <div className='update-teacher' onClick={() => setPopupVisibleDepartment(true)}>Редактировать</div>
                    </div>
                    {fieldDepartmentVisible && selectedDepartment.map((department, index) => {
                        if (index === 0) {
                            return (
                                <PopupDepartment
                                    department={department}
                                    key={department.id}
                                    handleUpdateDepartment={handleUpdateDepartment}
                                    popupVisible={popupVisibleDepartment}
                                    setPopupVisible={setPopupVisibleDepartment}
                                />
                            )
                        }
                    })}
                </div>
            </div>
        </div>
    )
}

export default Master
