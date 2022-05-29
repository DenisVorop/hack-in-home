import React from 'react';
import { TTeacher } from '../../types/types';

import photo from '../../assets/images/photo.svg'

import './teachercard.scss'
import { Link } from 'react-router-dom';
import { fetchTeachersKovalData } from '../../store/reducers/ActionCreators';
import { useAppDispatch } from '../../store/hooks/redux';

interface TeacherCardProps {
    teacher: TTeacher
}

const TeacherCard: React.FC<TeacherCardProps> = ({ teacher }) => {
    const dispatch = useAppDispatch()

    const openTeacherInfo = (name: string) => {
        dispatch(fetchTeachersKovalData(name))
    }

    return (
        <div className="teachers__card">
            <div className="teachers__teacher-photo">
                <div className="teachers__photo">
                    <img
                        src={teacher.Img
                            ? teacher.Img
                            : photo
                        }
                        alt={teacher.name}
                    />
                </div>
            </div>
            <div className="teachers__degree">{teacher.degree}</div>
            <Link to={`/teachers/${teacher.name}`}>
                <div className="teachers__name" onClick={() => openTeacherInfo(teacher.name)}>{teacher.name}</div>
            </Link>
            <div className="teachers__email">
                <a href={`mailto: ${teacher.email}`}>{teacher.email}</a>
            </div>
            <div className="teachers__phone">
                <a href={`tel:${teacher.phone}`}>{teacher.phone}</a>
            </div>
        </div>
    )
}

export default TeacherCard
