import React from 'react';
import { TTeacher } from '../../types/types';

import photo from '../../assets/images/photo.svg'

import './teachercard.scss'

interface TeacherCardProps {
    teacher: TTeacher
}

const TeacherCard: React.FC<TeacherCardProps> = ({ teacher }) => {
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
            <div className="teachers__name">{teacher.name}</div>
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
