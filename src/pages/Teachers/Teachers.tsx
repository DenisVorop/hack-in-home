import React from 'react';
import useScroll from '../../hooks/useScroll';

import { useAppDispatch, useAppSelector } from '../../store/hooks/redux';
import { deleteTeachers, fetchTeachersData } from '../../store/reducers/ActionCreators';

import { TTeacher } from '../../types/types';

import './teachers.scss'
import TeacherCard from '../../components/TeacherCard/TeacherCard';

interface TeachersProps { }

const Teachers: React.FC<TeachersProps> = () => {
    const [page, setPage] = React.useState(1)
    const limit = 2
    const parentRef = React.useRef<HTMLDivElement>(null)
    const childRef = React.useRef<HTMLDivElement>(null)

    const dispatch = useAppDispatch()
    const { error, isLoading, teachers } = useAppSelector(state => state.teachersReducer)
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

    return (
        <div className="teachers" ref={parentRef}>
            <div className="teachers__container">
                <div className="teachers__body">
                    <div className="teachers__cards">
                        {visibleTeachers?.map(teacher => (
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
