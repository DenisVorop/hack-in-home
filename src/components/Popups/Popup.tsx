import React from 'react';
import cn from 'classnames'

import './popup.scss'

interface PopupProps {
    setPopupVisible: (popupVisible: boolean) => void
    popupVisible: boolean
}

const Popup: React.FC<React.PropsWithChildren<PopupProps>> = ({ children, setPopupVisible, popupVisible }) => {
    return (
        <div className={cn("popup", { "popup-active": popupVisible })} onClick={() => setPopupVisible(false)}>
            <div className={cn("popup__body", { "popup-body-active": popupVisible })} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default Popup
