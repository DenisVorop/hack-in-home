import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import cn from 'classnames';

import './sidebar.scss'

const Sidebar: React.FC = () => {
    const location = useLocation()
    const [activeLink, setActiveLink] = React.useState('/')

    const links = React.useMemo(() => [
        { link: 'Главная', path: '/' },
        { link: 'Институты', path: '/institutes' },
        { link: 'Преподаватели', path: '/teachers' },
        { link: 'Личный кабинет', path: '/account' },
    ], [])

    const toggleActiveLink = (path: string) => {
        setActiveLink(path)
    }

    React.useEffect(() => {
        setActiveLink(location.pathname)
    }, [location.pathname])

    return (
        <div className="sidebar">
            <div className="sidebar__container">
                <div className="sidebar__links">
                    {links.map(link => (
                        <Link
                            to={link.path}
                            key={link.path}
                        >
                            <div
                                className={cn({ "sidebar__link-active": link.path === activeLink }, "sidebar__link")}
                                onClick={() => toggleActiveLink(link.path)}
                            >
                                {link.link}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Sidebar
