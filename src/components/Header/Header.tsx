import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg'
import userImg from '../../assets/images/userImg.svg'
import logoutImg from '../../assets/images/logout.svg'

import { useAppDispatch, useAppSelector } from '../../store/hooks/redux';
import { logoutFetch } from '../../store/reducers/ActionCreators';

import './header.scss'

const Header: React.FC = () => {
    const { user } = useAppSelector(state => state.authReducer)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        dispatch(logoutFetch())
        navigate('/login')
    }

    return (
        <div className="header">
            <div className="header__container">
                <div className="header__body">
                    <div className="header__logo">
                        <img src={logoImg} alt="logo" />
                    </div>
                    <div className="header__main">
                        <div className="header__info">
                            <div className="header__user-img">
                                <img src={userImg} alt="user" />
                            </div>
                            <div className="header__user">
                                <Link to='/account'>
                                    <div className="header__name">{user?.name}</div>
                                </Link>
                                <div className="header__group">{user?.group}</div>
                            </div>
                        </div>
                        <div className="header__logout" onClick={logout}>
                            <img src={logoutImg} alt="logout" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
