import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './notfound.scss'

interface NotFoundProps { }

const NotFound: React.FC = () => {
    const navigate = useNavigate()

    return (
        <div className="not-found">
            <div className="not-found__container">
                <div className="not-found__body">
                    <div className="not-found__title">Не можем найти страницу :(</div>
                    <div className="not-found__label">Вернитесь назад или перейдите на главную</div>
                    <div className="not-found__buttons">
                        <div className="not-found__back" onClick={() => navigate(-1)}>Назад</div>
                        <div className="not-found__main">
                            <Link to='/'>На главную</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound
