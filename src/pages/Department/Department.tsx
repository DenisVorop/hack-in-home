import React from 'react';
import { useParams } from 'react-router-dom';

import { TDepartment, TTeacher } from '../../types/types';

import { useAppDispatch, useAppSelector } from '../../store/hooks/redux';
import { deleteTeachers, fetchTeachersOfDepartmentData } from '../../store/reducers/ActionCreators';

import TeacherCard from '../../components/TeacherCard/TeacherCard';

import './department.scss'

interface DepartmentProps { }

const Department: React.FC<DepartmentProps> = () => {
    const [departmentActive, setDepartmentActive] = React.useState<TDepartment | null>(null)

    const { teachers } = useAppSelector(state => state.teachersReducer)
    const { departments } = useAppSelector(state => state.departmentsReducer)
    const { department } = useParams()
    const dispatch = useAppDispatch()

    React.useEffect(() => {
        setDepartmentActive(departments!.filter(departmentFromData => departmentFromData.department === department)[0])
    }, [departments])

    React.useEffect(() => {
        dispatch(fetchTeachersOfDepartmentData(department!))
        return () => {
            dispatch(deleteTeachers())
        }
    }, [])

    return (
        <div className="department">
            <div className="department__container">
                <div className="department__body">
                    <div className="department__title">{departmentActive?.department}</div>
                    <div className="department__institute">{departmentActive?.institute}</div>
                    <div className="department__location">3 корпус 520 кабинет</div>
                    <div className="department__info">{departmentActive?.info}</div>
                    <div className="department__working">
                        <div className="department__label">Преподаватели кафедры</div>
                        <div className="department__teachers">
                            {teachers?.map(teacher => (
                                <TeacherCard
                                    teacher={teacher}
                                    key={teacher.name}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Department
