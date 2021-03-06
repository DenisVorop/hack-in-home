import React from 'react';
import useInput from '../../../hooks/useInput';
import { TDepartment, TTeacher } from '../../../types/types';
import TeacherCard from '../../TeacherCard/TeacherCard';
import Popup from '../Popup';

interface PopupMasterProps {
    teacher: TTeacher
    handleUpdateTeacher: (teacher: TTeacher) => void
    popupVisible: boolean
    setPopupVisible: (visible: boolean) => void
}

const PopupMaster: React.FC<PopupMasterProps> = ({ teacher, handleUpdateTeacher, popupVisible, setPopupVisible }) => {
    const { value: valueName, reset: resetName, bind: bindName } = useInput(teacher.name)
    const { value: valueDegree, reset: resetDegree, bind: bindDegree } = useInput(teacher.degree)
    const { value: valuePhone, reset: resetPhone, bind: bindPhone } = useInput(teacher.phone)
    const { value: valueEmail, reset: resetEmail, bind: bindEmail } = useInput(teacher.email)
    const { value: valueSubjects, reset: resetSubjects, bind: bindSubjects } = useInput(teacher.subjects)
    const { value: valueDepartment, reset: resetDepartment, bind: bindDepartment } = useInput(teacher.department)

    const saveChanges = () => {
        handleUpdateTeacher({
            name: valueName,
            degree: valueDegree,
            phone: valuePhone,
            email: valueEmail,
            subjects: valueSubjects,
            department: valueDepartment,
            Img: teacher.Img,
            id: teacher.id,
        })
    }

    return (
        <div key={teacher.id} className='update-body'>
            <TeacherCard
                teacher={teacher}
            />
            <Popup
                popupVisible={popupVisible}
                setPopupVisible={setPopupVisible}
            >
                <div className='change-fields-teacher'>
                    <div className='change-field-teacher'>
                        <div className="change-field-input">
                            <input type="text" {...bindName} />
                        </div>
                        <div className="change-field-label">
                            ?????? ??????????????????????????
                        </div>
                    </div>
                    <div className='change-field-teacher'>
                        <div className="change-field-input">
                            <input type="text" {...bindDegree} />
                        </div>
                        <div className="change-field-label">
                            ??????????????
                        </div>
                    </div>
                    <div className='change-field-teacher'>
                        <div className="change-field-input">
                            <input type="text" {...bindPhone} />
                        </div>
                        <div className="change-field-label">
                            ?????????? ????????????????
                        </div>
                    </div>
                    <div className='change-field-teacher'>
                        <div className="change-field-input">
                            <input type="text" {...bindEmail} />
                        </div>
                        <div className="change-field-label">
                            ??????????
                        </div>
                    </div>
                    <div className='change-field-teacher'>
                        <div className="change-field-input">
                            <input type="text" {...bindSubjects} />
                        </div>
                        <div className="change-field-label">
                            ????????????????, ?????????????? ?????????? ??????????????????????????
                        </div>
                    </div>
                    <div className='change-field-teacher'>
                        <div className="change-field-input">
                            <input type="text" {...bindDepartment} />
                        </div>
                        <div className="change-field-label">
                            ??????????????
                        </div>
                    </div>
                    <div
                        className="popup-save-changes"
                        onClick={saveChanges}
                    >
                        ??????????????????
                    </div>
                </div>
            </Popup>
        </div>
    )
}

export default PopupMaster
