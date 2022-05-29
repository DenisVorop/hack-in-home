import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import cn from 'classnames';

import './sidebar.scss'
import { constants } from '../../constants/constants';


const Sidebar: React.FC = () => {
    const location = useLocation()
    const [activeLink, setActiveLink] = React.useState('/')

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
                    {constants.links.map(link => (
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
                <div className="sidebar__resources">
                    <div className="sidebar__label">Полезные ссылки</div>
                    {constants.linksResources.map(resource => (
                        <div
                            className="sidebar__resource resource-sidebar"
                            key={resource.path}
                        >
                            <a
                                className='sidebar__resource-link'
                                href={resource.path}
                                target='_blank'
                                rel="noreferrer"
                            >
                                <div className="resource-sidebar__image">
                                    <img src={resource.img} alt={resource.name} />
                                </div>
                                <div className="resource-sidebar__name">{resource.name}</div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Sidebar
