import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

import './frame.scss'

const Frame: React.FC = () => {
    return (
        <div className="frame">
            <Header />
            <div className="frame__container">
                    <Sidebar />
                    <Outlet />
            </div>
        </div>
    )
}

export default Frame
