import React from 'react';
import { useParams } from 'react-router-dom';

import photo from '../../assets/images/photo.svg'
import { useAppDispatch, useAppSelector } from '../../store/hooks/redux';
import { deleteTeachers } from '../../store/reducers/ActionCreators';

import './teacher.scss'

interface TeacherProps { }

const Teacher: React.FC = () => {
    const { teachersKoval } = useAppSelector(state => state.teachersReducer)
    const [teacher, setTeacher] = React.useState<any>(null)
    const params = useParams()
    const dispatch = useAppDispatch()

    React.useEffect(() => {
        if (teachersKoval && teachersKoval?.length > 0) {
            fetch(`https://rinh-api.kovalev.team/employee/dto/${teachersKoval[0].id}`)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    setTeacher(data)
                });
        } else {
            setTeacher({
                employee: {
                    fullName: params.name,
                    avatarUrl: photo,
                    specialtyWorkExperience: 'Нет данных сколько',
                    commonWorkExperience: 'Нет данных сколько',
                },
                position2: 'Нет данных',
                department: { name: 'Нет данных', shortName: 'Нет данных' },
                academicDegree: { fullName: 'Нет данных', shortName: 'Нет данных' },
                academicTitle: { name: 'Нет данных' }

            })
        }
    }, [teachersKoval])

    React.useEffect(() => {
        fetch(`https://rinh-api.kovalev.team/employee/surname/${params.name}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                fetch(`https://rinh-api.kovalev.team/employee/dto/${data[0].id}`)
                    .then((response) => {
                        return response.json();
                    })
                    .then((data) => {
                        setTeacher(data)
                    });
            });

        return () => {
            dispatch(deleteTeachers())
        }
    }, [])

    if (teacher) {
        return (
            <div className="teacher">
                <div className="teacher__container">
                    <div className="teacher__title">{teacher.employee.fullName}</div>
                    <div className="teacher__body">
                        <div className="teacher__info">
                            <div className="teacher__photo">
                                <img src={teacher?.employee?.avatarUrl} alt="teacher" />
                            </div>
                            <div className="teacher__info-right">
                                <div className="teacher__department">{teacher?.department?.name} ({teacher?.department?.shortName})</div>
                                <div className="teacher__micro-info">
                                    <div className="teacher__degree-rank">
                                        <div className="teacher__degree">
                                            <div className="degree__label">Ученая степень:</div>
                                            <div className="degree__name">{teacher?.academicDegree?.fullName} ({teacher?.academicDegree?.shortName})</div>
                                        </div>
                                        <div className="teacher__rank">
                                            <div className="rank__label">Ученое звание:</div>
                                            <div className="rank__name">{teacher?.academicTitle?.name}, {teacher?.position2?.name}</div>
                                        </div>
                                    </div>
                                    <div className="teacher__working">
                                        <div className="teacher__common">
                                            <div className="common__label">Общий стаж работы:</div>
                                            <div className="common__name">{teacher?.employee?.commonWorkExperience} лет</div>
                                        </div>
                                        <div className="teacher__spec">
                                            <div className="spec__label">Стаж работы по специальности:</div>
                                            <div className="spec__name">{teacher?.employee?.specialtyWorkExperience} лет</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="teacher__common-info">
                            <div className="teacher__activity">
                                <div className="activity-teacher-label">Преподавательская деятельность</div>
                                <div className="activity-teacher-info">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return <h1>Loading...</h1>
    }
}

export default Teacher
