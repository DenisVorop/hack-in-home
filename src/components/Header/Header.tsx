import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg'
import userImg from '../../assets/images/heh.svg'
import logoutImg from '../../assets/images/logout.svg'
import search from '../../assets/images/search.svg'

import { useAppDispatch, useAppSelector } from '../../store/hooks/redux';
import { logoutFetch } from '../../store/reducers/ActionCreators';

import './header.scss'
import useInput from '../../hooks/useInput';
import { constants } from '../../constants/constants';
import { TAllQuestions } from '../../types/types';

import useDebounce from '../../hooks/useDebounce'

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

    const { value: searchValue, reset: resetSearchValue, bind: bindSearchValue } = useInput('')
    const [allQuestions, setAllQuestions] = React.useState<TAllQuestions[]>()
    const [menuVisible, setMenuVisible] = React.useState<boolean>(false)

    React.useEffect(() => {
        setMenuVisible(true)
        setAllQuestions(() => constants.allQuestions.filter(question => question.question.toLowerCase().includes(searchValue.toLowerCase())))
    }, [searchValue])

    const redirect = (to: string) => {
        navigate(to)
        resetSearchValue()
    }

    React.useEffect(() => {
        visibleMenu()
    }, [searchValue])

    const toggleMenu = () => {
        setMenuVisible(false)
    }
    const visibleMenu = useDebounce(toggleMenu, 2000)
    // .filter(string => string.toLowerCase().includes(searchValue.toLowerCase())
    return (
        <div className="header">
            <div className="header__container">
                <div className="header__body">
                    <div className="header__left">
                        <div className="header__logo">
                            <img src={logoImg} alt="logo" />
                        </div>
                        <div className="header__search">
                            <img src={search} alt="search" />
                            <input type="text" placeholder='Поиск по сайту' {...bindSearchValue} list="main-input" />
                            {menuVisible && searchValue.length > 2 && <div className='dropdown-content'>
                                {allQuestions?.map((question, index) => {
                                    for (; index < 3;)
                                        return (
                                            <div
                                                key={question.question}
                                                onClick={() => redirect('/questions')}
                                                className='dropdown-link'
                                            >
                                                {question.question}
                                            </div>
                                        )
                                })}
                            </div>}
                        </div>
                    </div>
                    <div className="header__main">
                        <div className="header__info">
                            <div className="header__user-img">
                                <img src={userImg} alt="user" />
                            </div>
                            <div className="header__user">
                                {user?.master
                                    ? <Link to='/Master'><div className="header__name">{user?.name}</div></Link>
                                    : <div className="header__name">{user?.name}</div>
                                }
                                <div className="header__group">{user?.group}</div>
                            </div>
                        </div>
                        <div className="header__logout" onClick={logout}>
                            <img src={logoutImg} alt="logout" />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Header
