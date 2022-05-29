import React from 'react';
import cn from 'classnames'
import { useAppSelector } from '../../store/hooks/redux';

import './account.scss'

import rasp from '../../assets/files/rasp.pdf'
import { constants } from '../../constants/constants';
import Popup from '../../components/Popups/Popup';
import { TGroup } from '../../types/types';
import Reference from '../../components/References/Reference';

interface AccountProps { }

const Account: React.FC = () => {
    const { user } = useAppSelector(state => state.authReducer)
    const [popupVisible, setPopupVisible] = React.useState<boolean>(false)

    const [activeLink, setActiveLink] = React.useState<string>('Основная информация')
    const [visibleIndexReference, setVisibleIndexReference] = React.useState<number>(2000)

    return (
        <div className="account">
            <div className="account__container">
                <div className="account__body">
                    <div className="account__header">
                        <div className="account__bar">
                            <div className="account__links">
                                {constants.account_links.map(link => (
                                    <div
                                        key={link.name}
                                        onClick={() => setActiveLink(link.name)}
                                        className={cn("account__link", { "account-link-active": link.name === activeLink })}
                                    >
                                        {link.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="main-info-general-account__timetable">
                            <a href={rasp} download className="main-info-general-account__button">Скачать расписание</a>
                        </div>
                    </div>
                    {activeLink === 'Основная информация'
                        ? <div className="account__general general-account">
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
                                <div className="secondary-bar-account__label spr account-title">Справки</div>
                                <div className="secondary-bar-account__questions">
                                    {constants.references.map((reference, index) => (
                                        <Reference
                                            key={reference.phone}
                                            index={index}
                                            visibleIndexReference={visibleIndexReference}
                                            setVisibleIndexReference={setVisibleIndexReference}
                                            reference={reference}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="account__secondary-bar secondary-bar-account">
                                <div className="secondary-bar-account__title account-title">Если вопросы</div>
                                <div className="secondary-bar-account__cards">
                                    <div className="secondary-bar-account__card">
                                        <div className="secondary-bar-account__label account-label">Деканат</div>
                                        <div className="secondary-bar-account__time">10:00 - 18:00</div>
                                        <div className="secondary-bar-account__position">Старый корпус, аудитория 233</div>
                                        <div className="secondary-bar-account__position">
                                            <a href='tel:+7 (499) 973-38-34'>+7 (499) 973-38-34</a>
                                        </div>
                                    </div>
                                    <div className="secondary-bar-account__card">
                                        <div className="secondary-bar-account__label account-label">Профком</div>
                                        <div className="secondary-bar-account__time">10:00 - 18:00</div>
                                        <div className="secondary-bar-account__position">Старый корпус 204 кабинет</div>
                                        <div className="secondary-bar-account__position">
                                        <a href='tel:+7 499 972 94 16'>+7 499 972 94 16</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        : activeLink === 'Рейтинг'
                            ? <><div className="rating-account__head">
                                <div className="rating-account__title account-title">Рейтинг</div>
                                <div className="rating-account__regulations" onClick={() => setPopupVisible(true)}>Правила расчета рейтинга</div>
                                <div className="rating-account__select">
                                    <select name="semester">
                                        <option value="">1 семестр</option>
                                        <option value="">2 семестр</option>
                                        <option value="">3 семестр</option>
                                        <option value="">4 семестр</option>
                                        <option value="">5 семестр</option>
                                        <option value="" selected>6 семестр</option>
                                    </select>
                                </div>
                            </div>
                                <div className="rating-account__cards">
                                    {constants.subjects.map(subject => (
                                        <div className="rating-account__card" key={subject.subject}>
                                            <div className="rating-account__left">
                                                <div className="rating-account__subject account-label">{subject.subject}</div>
                                                <div className="rating-account__exam">
                                                    <div className="rating-account__exam-name">{subject.exam}</div>
                                                    <div className="rating-account__coefficient">К = {subject.coef}</div>
                                                </div>
                                            </div>
                                            <div className="rating-account__score score-rating-account">
                                                <div className={cn("score-rating-account__circle mark-low",
                                                    {
                                                        "mark-medium": Number(subject.mark) < 45 && Number(subject.mark) > 34,
                                                        "mark-top": Number(subject.mark) > 44
                                                    })}>
                                                    <div
                                                        className="score-rating-account__score">{subject.mark}</div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div></>
                            : <div className="account__rating rating-account">
                                <div className="rating-account__body">
                                    <div className="general-account__list list-general-account">
                                        <div className="list-general-account__title account-title">Список группы</div>
                                        <div className="list-general-account__label">* отмечена староста группы</div>
                                        <div className="list-general-account__list">
                                            {user?.group_list.map((person: TGroup, index) => (
                                                <div
                                                    key={person.name}
                                                    className={cn("list-general-account__user", { "headman": person.headmen })}
                                                >
                                                    {index + 1}. {person.name} {person.headmen && <span>*</span>}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                    }
                </div>
            </div>
            <Popup
                popupVisible={popupVisible}
                setPopupVisible={setPopupVisible}
            >
                <div className="rating">
                    <div className="rating__container">
                        <div className="rating__body">
                            <div className="rating__label">Текущий рейтинг студента рассчитывается после завершения сдачи экзаменационной сессии в два этапа:</div>
                            <div className="rating__formule">1) Рассчитывается рейтинг по предмету по следующей формуле:</div>
                            <div className="rating__p">отметка за первый модуль умножается на коэффициент 3,</div>
                            <div className="rating__p">отметка за второй модуль умножается на коэффициент 2,</div>
                            <div className="rating__p">отметка за зачет (если по предмету предусмотрен зачет) или за курсовой проект (если по предмету предусмотрен курсовой проект) умножается на коэффициент 5,</div>
                            <div className="rating__p">отметка за экзамен (если по предмету предусмотрен экзамен) умножается на коэффициент 7.</div>
                            <div className="rating__formule">2) Полученные произведения суммируются и делятся на сумму коэффициентов.</div>
                            <div className="rating__text">
                                <div className="rating__p-p">Каждый рейтинг по предмету умножается на коэффициент предмета (находится в таблице). Затем полученные произведения суммируются и делятся на сумму коэффициентов предметов.</div>
                                <div className="rating__p-p">Физическая культура в расчете рейтинга не учитывается, однако рейтинг не может быть рассчитан до тех пор, пока все виды аттестации по этому предмету не сданы.</div>
                            </div>
                            <div className="rating__label">Накопленный рейтинг студента рассчитывается как среднее арифметическое текущих рейтингов всех прошедших семестров.</div>
                        </div>
                    </div>
                </div>
            </Popup>
        </div>
    )
}

export default Account
