import React from 'react';

import check from '../../assets/images/check.svg'
import close from '../../assets/images/close.svg'

import Popup from '../../components/Popups/Popup';

import { constants } from '../../constants/constants';

import './questions.scss'

interface QuestionsProps { }

const Questions: React.FC = () => {

    const [popupVisible, setPopupVisible] = React.useState<boolean>(false)
    const [selectedQuestion, setSelectedQuestion] = React.useState({ question: '', answer: '', link: '' })

    return (
        <div className="questions">
            <div className="questions__container">
                <div className="questions__body">
                    <div className="questions__title">Где вы можете решить возникающие у Вас вопросы</div>
                    <div className="questions__main">
                        <div className="questions__cards">
                            <div className="questions__card">
                                <div className="questions__top">
                                    <div className="questions__left">
                                        <div className="questions__label">Деканат</div>
                                        <div className="questions__time">10:00 - 18:00</div>
                                    </div>
                                    <div className="questions__location">Аудитория 233 (старый корпус)</div>
                                </div>
                                <div className="questions__questions">
                                    {constants.questionsDec.map(question => (
                                        <div
                                            className="questions__question"
                                            key={question.question}
                                            onClick={() => setSelectedQuestion(question)}
                                        >
                                            <div className="questions__check">
                                                <img src={check} alt="check" />
                                            </div>
                                            <div className="questions__text" onClick={() => setPopupVisible(true)}>{question.question}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="questions__card">
                                <div className="questions__top">
                                    <div className="questions__left">
                                        <div className="questions__label">Профком</div>
                                        <div className="questions__time">10:00 - 18:00</div>
                                    </div>
                                    <div className="questions__location">Старый корпус 204 кабинет</div>
                                </div>
                                <div className="questions__questions">
                                    {constants.questionsProf.map(question => (
                                        <div
                                            className="questions__question"
                                            key={question.question}
                                            onClick={() => setSelectedQuestion(question)}
                                        >
                                            <div className="questions__check">
                                                <img src={check} alt="check" />
                                            </div>
                                            <div className="questions__text" onClick={() => setPopupVisible(true)}>{question.question}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="questions__common">
                        <div className="questions__title">Частые вопросы</div>
                        <div className="questions__questions common-questions">
                            {constants.questions.map(question => (
                                <div
                                    onClick={() => setSelectedQuestion(question)}
                                    className="questions__question common-question"
                                    key={question.question}
                                >
                                    <div className="questions__text" onClick={() => setPopupVisible(true)}>{question.question}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Popup
                setPopupVisible={setPopupVisible}
                popupVisible={popupVisible}
            >
                <div className="popup-question">
                    <div className="popup-question__top">
                        <div className="popup-question__title">{selectedQuestion.question}</div>
                        <div className="popup-question__close" onClick={() => setPopupVisible(false)}>
                            <img src={close} alt="close" />
                        </div>
                    </div>
                    <div className="popup-question__text">{selectedQuestion.answer}</div>
                    <div className="popup-question__link">{selectedQuestion.link && selectedQuestion.link}</div>
                </div>
            </Popup>
        </div>
    )
}

export default Questions
