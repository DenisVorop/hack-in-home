import React from 'react'
import cn from 'classnames'

import useInput from '../../hooks/useInput'
import { useKeyPress } from '../../hooks/useKeyPress'

import { TDepartment, TMessage, TTeacher } from '../../types/types'

import chatLogo from '../../assets/images/logo.svg'
import info from '../../assets/images/help.svg'
import send from '../../assets/images/send.svg'

import './chat.scss'
import axios from 'axios'

interface ChatProps { }

const Chat: React.FC<ChatProps> = () => {
    const { value, reset, bind } = useInput('')
    const [messages, setMessages] = React.useState([
        { user: 'bot', text: 'Hello! Finally found the time to write to you I need your help in creating interactive animations for my mobile application.' },
        { user: 'bot', text: 'for my mobile application.' },
        { user: 'user', text: 'Hello! Finally found the time to write to you for my mobile application.' },
        { user: 'bot', text: 'Hello! Finally application.' },
        { user: 'user', text: 'Hello! Finally found the time  in creating interactive animations for my mobile application.' },
        { user: 'user', text: 'Hello!' },
    ] as TMessage[])
    const isEnterPressed = useKeyPress('Enter')

    React.useEffect(() => {
        const chat = document.querySelector('.chat__body')
        chat!.scrollTo(0, chat!.scrollHeight);
    }, [messages])

    React.useEffect(() => {
        isEnterPressed && addMessage()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isEnterPressed])

    const fetchTeacher = async (value: string) => {
        return await axios.get(`http://localhost:8000/api_teachers?name_like=${value}`)
    }

    const fetchDepartment = async (value: string) => {
        return await axios.get(`http://localhost:8000/api_departments?department_like=${value}`)
    }

    const addMessage = async () => {
        const teacher: TTeacher[] = await fetchTeacher(value)
            .then(res => res.data)
        const department: TDepartment[] = await fetchDepartment(value)
            .then(res => res.data)
        reset()
        if (value === '/info') {
            setMessages(prev => [...prev, {
                user: 'user',
                text: 'Дай информацию какую-либо'
            }])
            return setTimeout(() => setMessages(prev => [...prev, {
                user: 'bot',
                text: 'вот тебе вся инфа, брат'
            }]), 1000)
        }
        if (value === '/departments') {
            const departments: TDepartment[] = await fetchDepartment('')
                .then(res => res.data)
            const res: string[] = []
            for (let i = 0; i < departments.length; i++) {
                i === 0
                    ? res.push(`${i + 1}. ${departments[i].department}`)
                    : res.push(`\n${i + 1}. ${departments[i].department}`)
            }
            setMessages(prev => [...prev, {
                user: 'user',
                text: 'Расскажи о кафедрах'
            }])
            return setTimeout(() => setMessages(prev => [...prev, {
                user: 'bot',
                text: `В университете МГТУ "СТАНКИН" 4 института.
                Они включают в себя следующие кафедры: \n
                ${res.toString()}`
            }]), 1000)
        }
        if (value === '/timetable') {
            setMessages(prev => [...prev, {
                user: 'user',
                text: 'Покажи расписание'
            }])
            return setTimeout(() => setMessages(prev => [...prev, {
                user: 'bot',
                text: 'вот тебе расписание, брат',
                file: '../../src/files/resume.pdf'
            }]), 1000)
        }
        if (value === '/rating') {
            setMessages(prev => [...prev, {
                user: 'user',
                text: 'Покажи рейтинг'
            }])
            return setTimeout(() => setMessages(prev => [...prev, {
                user: 'bot',
                text: `Ваш рейтинг - ${37}, более подробную информацию о баллах Вы можете посмотреть в своем личном кабинете`
            }]), 1000)
        }
        if (value) {
            setMessages(prev => [...prev, {
                user: 'user',
                text: value
            }])
            if (teacher.length > 0 && value.length >= 6) {
                return setTimeout(() => setMessages(prev => [...prev, {
                    user: 'bot',
                    text: `ФИО: ${teacher[0].name}
                    ${teacher[0].department}
                    Предметы: ${teacher[0].subjects}
                    Почта: ${teacher[0].email}
                    Внутренний номер: ${teacher[0].phone}`,
                }]), 1000)
            }
            if (department.length > 0 && value.length >= 6) {
                return setTimeout(() => setMessages(prev => [...prev, {
                    user: 'bot',
                    text: `${department[0].department}
                    ${department[0].institute}`,
                }]), 1000)
            }
        }
        return setTimeout(() => setMessages(prev => [...prev, {
            user: 'bot',
            text: 'Не могу ничего найти :(',
        }]), 1000)
    }

    const promptHints = React.useMemo(() => [
        { hint: '/info', label: 'Получить информацию о платформе' },
        { hint: '/departments', label: 'Получить список кафедр' },
        { hint: '/timetable', label: 'Получить расписание' },
        { hint: '/rating', label: 'Получить рейтинг' }
    ], [])

    return (
        <div className="chat">
            <div className="chat__container">
                <div className="chat__about about-chat">
                    <div className="about-chat__description">
                        About app Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Nunc vulputate libero et velit interdum,
                        ac aliquet odio mattis. Class aptent taciti sociosqu ad litora
                        torquent per conubia nostra, per inceptos himenaeos. Curabitur
                        tempus urna at turpis condimentum lobortis.
                    </div>
                    <div className="about-chat__bot">
                        Виртуальный помощник - удобный и понятный интерфейс. Применение бота обеспечивает
                        пользователя неограниченными ресурсами в использовании сайта. Из функций можно отметить:
                        поиск данных о кафедрах и о преподавателей; встроенный модульный журнал; возможность
                        просмотра расписания групп.
                    </div>
                </div>
                <div className="chat__wrapper">
                    <div className="chat__header header-chat">
                        <div className="header-chat__left">
                            <div className="header-chat__logo">
                                <img src={chatLogo} alt="chat-logo" />
                            </div>
                            <div className="header-chat__info">
                                <div className="header-chat__label">Онлайн помощник</div>
                                <div className="header-chat__online">online</div>
                            </div>
                        </div>
                        <div className="header-chat__right">
                            <img src={info} alt="help" />
                        </div>
                    </div>
                    <div className="chat__body body-chat">
                        <div className="body-chat__messages">
                            {messages.map((message, idx) => {
                                if (message.user === 'bot') {
                                    const condition = idx - 1 >= 0 && messages[idx - 1].user === 'bot'
                                    return (
                                        <div className="body-chat__message chat-bot" key={`${message}_${idx}`}>
                                            <div className={cn("body-chat__logo", { "body-chat__logo-circle": idx === 0 || !(condition) })}>
                                                {condition
                                                    ? null
                                                    : <img src={chatLogo} alt="chat-logo" />
                                                }
                                            </div>
                                            <div className="messages">
                                                <div className="message bot-message">
                                                    <div>{message.text}</div>
                                                    {message.file &&
                                                        <div>
                                                            <a href={message.file} download>
                                                                Скачать
                                                            </a>
                                                        </div>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                                return (
                                    <div className="body-chat__message" key={`${message}_${idx}`}>
                                        <div className="messages">
                                            <div className="message">
                                                {message.text}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="chat__input input-chat">
                        <div className="input-chat__input">
                            <input type="text" placeholder='Какой вопрос Вас интересует?' {...bind} list="choices" />
                            <datalist id="choices">
                                {promptHints.map(hint => (
                                    <option
                                        value={hint.hint}
                                        key={hint.hint}
                                    >
                                        {hint.label}
                                    </option>
                                ))}
                            </datalist>
                        </div>
                        <div className="input-chat__button" onClick={addMessage}>
                            <img src={send} alt="send-message" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat
