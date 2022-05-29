import React from 'react';
import { useSearchParams } from 'react-router-dom';

import useScroll from '../../hooks/useScroll';
import useInput from '../../hooks/useInput';
import { useAppDispatch, useAppSelector } from '../../store/hooks/redux';
import { deleteTeachers, fetchTeachersData } from '../../store/reducers/ActionCreators';

import TeacherCard from '../../components/TeacherCard/TeacherCard';

import { TTeacher } from '../../types/types';

import search from '../../assets/images/search.svg'

import './teachers.scss'

interface TeachersProps { }

const Teachers: React.FC<TeachersProps> = () => {
    const [page, setPage] = React.useState(1)
    const limit = 2
    const parentRef = React.useRef<HTMLDivElement>(null)
    const childRef = React.useRef<HTMLDivElement>(null)

    const dispatch = useAppDispatch()
    const { error, isLoading, teachers, teachersKoval } = useAppSelector(state => state.teachersReducer)
    const intersected = useScroll(parentRef, childRef, () => fetchTeachers())
    const [visibleTeachers, setVisibleTeachers] = React.useState<TTeacher[] | null>(null)

    const fetchTeachers = () => {
        dispatch(fetchTeachersData(limit, page))
        setPage(prev => prev + 1)
    }

    React.useEffect(() => {
        setVisibleTeachers(teachers)
    }, [teachers])

    React.useEffect(() => {
        return () => {
            dispatch(deleteTeachers())
        }
    }, [])

    const { value: valueName, reset: resetName, bind: bindName } = useInput('')
    const { value: valueDepartment, reset: resetDepartment, bind: bindDepartment } = useInput('')
    const [searchParams, setSearhParams] = useSearchParams()
    const postQuery = searchParams.get('name') || ''
    const postQueryDep = searchParams.get('department') || ''

    React.useEffect(() => {
        setSearhParams({ name: valueName, department: valueDepartment })
    }, [valueName, valueDepartment])

    return (
        <div className="teachers" ref={parentRef}>
            <div className="teachers__container">
                <div className="teachers__inputs">
                    <div className="teachers__input-name">
                        <div className="header__search teacher-search">
                            <img src={search} alt="search" />
                            <input type="text" placeholder='Поиск по ФИО' {...bindName} />
                        </div>
                    </div>
                    <div className="teachers__input-department">
                        <div className="header__search teacher-search">
                            <img src={search} alt="search" />
                            <input type="text" placeholder='Поиск по кафедре' {...bindDepartment} />
                        </div>
                    </div>
                </div>
                <div className="teachers__body">
                    <div className="teachers__cards">
                        {visibleTeachers
                            ?.filter(teacher => teacher.name.toLowerCase().includes(postQuery.toLowerCase()))
                            .filter(teacher => teacher.department.toLowerCase().includes(postQueryDep.toLowerCase()))
                            .map(teacher => (
                                <TeacherCard
                                    key={teacher.name}
                                    teacher={teacher}
                                />
                            ))}
                        <div ref={childRef} style={{ height: 20, background: 'green', opacity: 0 }} />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Teachers


// {/* <div>{teacher.subjects}</div> */ }
