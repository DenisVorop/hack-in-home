import React from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks/redux';
import { fetchDepartmentsData } from '../../store/reducers/ActionCreators';

import { TDepartment } from '../../types/types';

import './institutes.scss'

interface InstitutesProps { }

const Institutes: React.FC<InstitutesProps> = () => {
    const { departments } = useAppSelector(state => state.departmentsReducer)
    const dispatch = useAppDispatch()
    const [institutes, setInstitutes] = React.useState<Array<string>>([])
    const [departmentsData, setDepartmentsData] = React.useState<TDepartment[] | null>(null)

    React.useEffect(() => {
        dispatch(fetchDepartmentsData())
    }, [])

    React.useEffect(() => {
        setDepartmentsData(departments)
    }, [departments])

    React.useEffect(() => {
        if (departmentsData) {
            const data: Array<string> = []
            for (let i = 0; i < departmentsData.length; i++) {
                if (!data.includes(departmentsData[i].institute)) {
                    data.push(departmentsData[i].institute)
                }
            }
            setInstitutes(data)
        }
    }, [departmentsData])

    return (
        <div className="institutes">
            <div className="institutes__container">
                <div className="institutes__body">
                    <div className="institutes__cards">
                        {institutes.map((institute) => {
                                return (
                                    <div className="institutes__card" key={institute}>
                                        <div className="institutes__institute">{institute}</div>
                                        <ul className="institutes__departments">
                                            {departmentsData?.map(department => {
                                                if (department.institute === institute)
                                                    return (
                                                        <li
                                                            key={department.department}
                                                            className="institutes__department"
                                                        >
                                                            <Link to={`/institutes/${department.department}`}>
                                                                {department.department}
                                                            </Link>
                                                        </li>
                                                    )
                                                return null
                                            })}
                                        </ul>
                                    </div>
                                )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Institutes
