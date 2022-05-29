import React from 'react';
import useInput from '../../../hooks/useInput';
import { TDepartment } from '../../../types/types';
import Popup from '../Popup';

interface PopupDepartmentProps {
    department: TDepartment
    handleUpdateDepartment: (department: TDepartment) => void
    popupVisible: boolean
    setPopupVisible: (visible: boolean) => void
}

const PopupDepartment: React.FC<PopupDepartmentProps> = ({ department, handleUpdateDepartment, popupVisible, setPopupVisible }) => {
    const { value: valueDepartment, reset: resetDepartment, bind: bindDepartment } = useInput(department.department)
    const { value: valueInstitute, reset: resetInstitute, bind: bindInstitutee } = useInput(department.institute)
    const { value: valueInfo, reset: resetInfo, bind: bindInfo } = useInput(department.info)

    const saveChanges = () => {
        handleUpdateDepartment({
            department: valueDepartment,
            institute: valueInstitute,
            info: valueInfo,
            id: department.id,
        })
    }

    return (
        <div>
            <div className="change-field-department-title">{department.department}</div>
            <Popup
                popupVisible={popupVisible}
                setPopupVisible={setPopupVisible}
            >
                <div className='change-fields-teacher'>
                    <div className='change-field-teacher'>
                        <div className="change-field-input">
                            <input type="text" {...bindDepartment} />
                        </div>
                        <div className="change-field-label">
                            Название кафедры
                        </div>
                    </div>
                    <div className='change-field-teacher'>
                        <div className="change-field-input">
                            <input type="text" {...bindInstitutee} />
                        </div>
                        <div className="change-field-label">
                            Название института
                        </div>
                    </div>
                    <div className='change-field-teacher'>
                        <div className="change-field-input">
                            <textarea {...bindInfo} />
                        </div>
                    </div>
                    <div
                        className="popup-save-changes"
                        onClick={saveChanges}
                    >
                        Сохранить
                    </div>
                </div>
            </Popup>
        </div>
    )
}

export default PopupDepartment
