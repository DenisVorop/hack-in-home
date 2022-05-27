import React from 'react';
import { useAppSelector } from '../../store/hooks/redux';

import './account.scss'

interface AccountProps { }

const Account: React.FC = () => {
    const { user } = useAppSelector(state => state.authReducer)

    return (
        <div className="account">
            <div className="account__container">
                <div className="account__body">
                    <div className="account__general general-account">
                        <div className="general-account__main-info main-info-general-account">
                            <div className="main-info-general-account__title account-title">Основная информация о студенте</div>
                            <div className="main-info-general-account__info">
                                <div className="main-info-general-account__number-book account-flex">
                                    <div className="number-book__label account-prelabel">Номер зачетной книжки:</div>
                                    <div className="number-book__text account-text">{user?.number_book}</div>
                                </div>
                                <div className="main-info-general-account__email account-flex">
                                    <div className="email__label account-prelabel">Адрес электронной почты:</div>
                                    <div className="email__text account-text">{user?.email}</div>
                                </div>
                                <div className="main-info-general-account__password account-flex">
                                    <div className="password__label account-prelabel">Направление:</div>
                                    <div className="password__text account-text">{user?.direction}</div>
                                </div>
                            </div>
                            <div className="main-info-general-account__timetable">
                                <a href='/' className="main-info-general-account__button" download>Скачать расписание</a>
                            </div>
                        </div>
                        <div className="general-account__list list-general-account">
                            <div className="list-general-account__title account-title">Список группы</div>
                            <div className="list-general-account__label">Красным цветом отмечена староста группы</div>
                            <div className="list-general-account__list">
                                <div className="list-general-account__user">1. Аймурзин Даниил Юрьевич</div>
                                <div className="list-general-account__user">2. Барсукова Наталия Викторовна</div>
                                <div className="list-general-account__user">3. Боровкова Анастасия Алексеевна</div>
                                <div className="list-general-account__user">4. Владыкина Анна Вадимовна</div>
                                <div className="list-general-account__user">5. Воропаев Денис Юрьевич</div>
                                <div className="list-general-account__user headman">6. Гвоздкова Милана Олеговна</div>
                                <div className="list-general-account__user">7. Григорян Лусинэ Гарегиновна</div>
                                <div className="list-general-account__user">8. Гурова Валерия Ивановна</div>
                                <div className="list-general-account__user">9. Гуртикова Кристина Александровна</div>
                                <div className="list-general-account__user">10. Жестянникова Полина Сергеевна</div>
                                <div className="list-general-account__user">11. Кондрашева Анастасия Константиновна</div>
                                <div className="list-general-account__user">12. Короткова Анастасия Дмитриевна</div>
                                <div className="list-general-account__user">13. Кытманов Александр Андреевич</div>
                                <div className="list-general-account__user">14. Лустина Анастасия Александровна</div>
                                <div className="list-general-account__user">15. Прохорова Алина Сергеевна</div>
                                <div className="list-general-account__user">16. Разокова Гулзора Шохиновна</div>
                                <div className="list-general-account__user">17. Рандин Илья Алексеевич</div>
                                <div className="list-general-account__user">18. Ряполова Анастасия Олеговна</div>
                                <div className="list-general-account__user">19. Самойлова София Владимировна</div>
                                <div className="list-general-account__user">20. Скобелкина Мария Алексеевна</div>
                                <div className="list-general-account__user">21. Султангирова Регина</div>
                                <div className="list-general-account__user">22. Счастливцева Юлия Владимировна</div>
                                <div className="list-general-account__user">23. Тиханова Юлия Владимировна</div>
                                <div className="list-general-account__user">24. Толмачева Екатерина Ивановна</div>
                                <div className="list-general-account__user">25. Чистякова Лидия Евгеньевна</div>
                                <div className="list-general-account__user">26. Шамуратов Денис Анатольевич</div>
                                <div className="list-general-account__user">27. Шведов Вадим Евгеньевич</div>
                            </div>
                        </div>
                    </div>
                    <div className="account__rating rating-account">
                        <div className="rating-account__body">
                            <div className="rating-account__head">
                                <div className="rating-account__title account-title">Рейтинг</div>
                                <div className="rating-account__regulations">Правила расчета рейтинга</div>
                                <div className="rating-account__select">
                                    <select name="semester">
                                        <option value="">1 семестр</option>
                                        <option value="">2 семестр</option>
                                        <option value="">3 семестр</option>
                                        <option value="">4 семестр</option>
                                        <option value="">5 семестр</option>
                                        <option value="">6 семестр</option>
                                    </select>
                                </div>
                            </div>
                            <div className="rating-account__cards">
                                <div className="rating-account__card">
                                    <div className="rating-account__left">
                                        <div className="rating-account__subject account-label">Основы токсикологии</div>
                                        <div className="rating-account__exam">
                                            <div className="rating-account__exam-name">Зачет</div>
                                            <div className="rating-account__coefficient">К = 1.0</div>
                                        </div>
                                    </div>
                                    <div className="rating-account__score score-rating-account">
                                        <div className="score-rating-account__circle">
                                            <div className="score-rating-account__score">32</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="rating-account__card">
                                    <div className="rating-account__left">
                                        <div className="rating-account__subject account-label">Основы токсикологии</div>
                                        <div className="rating-account__exam">
                                            <div className="rating-account__exam-name">Зачет</div>
                                            <div className="rating-account__coefficient">К = 1.0</div>
                                        </div>
                                    </div>
                                    <div className="rating-account__score score-rating-account">
                                        <div className="score-rating-account__circle">
                                            <div className="score-rating-account__score">32</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="rating-account__card">
                                    <div className="rating-account__left">
                                        <div className="rating-account__subject account-label">Основы токсикологии</div>
                                        <div className="rating-account__exam">
                                            <div className="rating-account__exam-name">Зачет</div>
                                            <div className="rating-account__coefficient">К = 1.0</div>
                                        </div>
                                    </div>
                                    <div className="rating-account__score score-rating-account">
                                        <div className="score-rating-account__circle">
                                            <div className="score-rating-account__score">32</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="rating-account__card">
                                    <div className="rating-account__left">
                                        <div className="rating-account__subject account-label">Основы токсикологии</div>
                                        <div className="rating-account__exam">
                                            <div className="rating-account__exam-name">Зачет</div>
                                            <div className="rating-account__coefficient">К = 1.0</div>
                                        </div>
                                    </div>
                                    <div className="rating-account__score score-rating-account">
                                        <div className="score-rating-account__circle">
                                            <div className="score-rating-account__score">32</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="rating-account__card">
                                    <div className="rating-account__left">
                                        <div className="rating-account__subject account-label">Основы токсикологии</div>
                                        <div className="rating-account__exam">
                                            <div className="rating-account__exam-name">Зачет</div>
                                            <div className="rating-account__coefficient">К = 1.0</div>
                                        </div>
                                    </div>
                                    <div className="rating-account__score score-rating-account">
                                        <div className="score-rating-account__circle">
                                            <div className="score-rating-account__score">32</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="rating-account__card">
                                    <div className="rating-account__left">
                                        <div className="rating-account__subject account-label">Основы токсикологии</div>
                                        <div className="rating-account__exam">
                                            <div className="rating-account__exam-name">Зачет</div>
                                            <div className="rating-account__coefficient">К = 1.0</div>
                                        </div>
                                    </div>
                                    <div className="rating-account__score score-rating-account">
                                        <div className="score-rating-account__circle">
                                            <div className="score-rating-account__score">32</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="rating-account__card">
                                    <div className="rating-account__left">
                                        <div className="rating-account__subject account-label">Основы токсикологии</div>
                                        <div className="rating-account__exam">
                                            <div className="rating-account__exam-name">Зачет</div>
                                            <div className="rating-account__coefficient">К = 1.0</div>
                                        </div>
                                    </div>
                                    <div className="rating-account__score score-rating-account">
                                        <div className="score-rating-account__circle">
                                            <div className="score-rating-account__score">32</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="rating-account__card">
                                    <div className="rating-account__left">
                                        <div className="rating-account__subject account-label">Основы токсикологии</div>
                                        <div className="rating-account__exam">
                                            <div className="rating-account__exam-name">Зачет</div>
                                            <div className="rating-account__coefficient">К = 1.0</div>
                                        </div>
                                    </div>
                                    <div className="rating-account__score score-rating-account">
                                        <div className="score-rating-account__circle">
                                            <div className="score-rating-account__score">32</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="rating-account__card">
                                    <div className="rating-account__left">
                                        <div className="rating-account__subject account-label">Основы токсикологии</div>
                                        <div className="rating-account__exam">
                                            <div className="rating-account__exam-name">Зачет</div>
                                            <div className="rating-account__coefficient">К = 1.0</div>
                                        </div>
                                    </div>
                                    <div className="rating-account__score score-rating-account">
                                        <div className="score-rating-account__circle">
                                            <div className="score-rating-account__score">32</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="account__secondary-bar secondary-bar-account">
                        <div className="secondary-bar-account__title account-title">Если вопросы</div>
                        <div className="secondary-bar-account__cards">
                            <div className="secondary-bar-account__card">
                                <div className="secondary-bar-account__label account-label">Деканат</div>
                                <div className="secondary-bar-account__time">10:00 - 18:00</div>
                                <div className="secondary-bar-account__position">6 корпус 345 кабинет</div>
                            </div>
                            <div className="secondary-bar-account__card">
                                <div className="secondary-bar-account__label account-label">Профком</div>
                                <div className="secondary-bar-account__time">10:00 - 18:00</div>
                                <div className="secondary-bar-account__position">3 корпус 455 кабинет</div>
                            </div>
                        </div>
                        <div className="secondary-bar-account__questions">
                            <div className="secondary-bar-account__question">Где я могу получить справку?</div>
                            <div className="secondary-bar-account__question">Что делать, если потерял пропуск?</div>
                            <div className="secondary-bar-account__question">Что делать, если не могу войти <br /> в электронный модульный журнал?</div>
                            <div className="secondary-bar-account__question">Что делать, если не могу войти в ЭОС?</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account
