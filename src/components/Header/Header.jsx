import React, { useEffect, useState } from 'react'
import "./Header.css"
import { NavLink } from 'react-router-dom'
import logo from "../../img/logo_h.png"
import { IoIosAirplane } from "react-icons/io";

const Header = ({ local }) => {
    const [booking, setBooking] = useState(false)
    const [info, setInfo] = useState(false)
    const [about, setAbout] = useState(false)

    function close() {
        setBooking(false)
        setInfo(false)
        setAbout(false)
    }

    useEffect(() => {
        close()
    }, [])

    return (
        <>
            <div className="header"></div>
            <div className='header_fixet'>
                <div className="container">
                    <div className="head">
                        {booking &&
                            <div onClick={close} className="fixet"></div>
                            || info &&
                            <div onClick={close} className="fixet"></div>
                            || about &&
                            <div onClick={close} className="fixet"></div>
                        }
                        <div className="pages_head">
                            <NavLink to="/" className="logo" >
                                Airtickets
                            </NavLink>
                        </div>
                        <div className="head_relative">
                            <div className='pages_head'>
                                <div
                                    onMouseEnter={() => setBooking(true) || setInfo(false) || setAbout(false)}
                                    className="page open1">Бронирование и управление </div>
                            </div>
                            {booking && <div
                                onMouseEnter={() => setBooking(true) || setInfo(false) || setAbout(false)}
                                onMouseLeave={() => setBooking(false) || setInfo(false) || setAbout(false)}
                                className="menu close1">
                                <div className="menu_one">
                                    <div className='page_menu_div'>Планирование</div>
                                    <NavLink to="" className="page_menu">
                                        Чартерные перевозки
                                    </NavLink>
                                    <NavLink to="" className="page_menu">
                                        Расписание рейсов
                                    </NavLink>
                                    <NavLink to="" className="page_menu">
                                        Наши направления
                                    </NavLink>
                                </div>
                                <div className="menu_two">
                                    <div className='page_menu_div'>Управление бронированием</div>
                                    <NavLink to="" className="page_menu">
                                        Онлаин регистрация
                                    </NavLink>
                                    <NavLink to="" className="page_menu">
                                        Купить багаж
                                    </NavLink>
                                    <NavLink to="" className="page_menu">
                                        Управление бронированием
                                    </NavLink>
                                </div>
                            </div>}
                            <div className='pages_head'>
                                <div
                                    onMouseEnter={() => setInfo(true) || setBooking(false) || setAbout(false)}
                                    className="page">Информация</div>
                            </div>
                            {info && <div
                                onMouseEnter={() => setInfo(true) || setBooking(false) || setAbout(false)}
                                onMouseLeave={() => setInfo(false) || setBooking(false) || setAbout(false)} className="menu">
                                <div className="menu_one">
                                    <div className='page_menu_div'>Информация о поездке</div>
                                    <NavLink to="" className="page_menu">
                                        Багаж
                                    </NavLink>
                                    <NavLink to="" className="page_menu">
                                        Нормы бесплатного провоза багажа
                                    </NavLink>
                                    <NavLink to="" className="page_menu">
                                        Ручная кладь
                                    </NavLink>
                                    <NavLink to="" className="page_menu">
                                        Путешествие с детьми и младенцами
                                    </NavLink>
                                    <NavLink to="" className="page_menu">
                                        Перевозка несопровождаемых детей
                                    </NavLink>
                                    <NavLink to="" className="page_menu">
                                        Перевозка беременных женщин
                                    </NavLink>
                                    <NavLink to="/info-page/dog" className="page_menu">
                                        Перевозка питомцев
                                    </NavLink>
                                </div>
                                <div className="menu_two">
                                    <div className='page_menu_div'>Информация о бронировании</div>
                                    <NavLink to="" className="page_menu">
                                        Как забронировать билет?
                                    </NavLink>
                                    <NavLink to="" className="page_menu">
                                        Изменение бронирования
                                    </NavLink>
                                    <NavLink to="" className="page_menu">
                                        Возврат и отмена
                                    </NavLink>
                                </div>
                            </div>}
                            <div className="pages">
                                <div
                                    onMouseEnter={() => setAbout(true) || setInfo(false) || setBooking(false)}
                                    className="page">О компании</div>
                                {about && <div
                                    onMouseEnter={() => setAbout(true) || setInfo(false) || setBooking(false)}
                                    onMouseLeave={() => setAbout(false) || setInfo(false) || setBooking(false)}
                                    className="menu d">
                                    <div className='menu_one'>
                                        <div className='page_menu_div'>О компании</div>
                                        <NavLink to="/about" className="page_menu">
                                            О нас
                                        </NavLink>
                                        <NavLink to="" className="page_menu">
                                            Наши партнеры
                                        </NavLink>
                                        <NavLink to="" className="page_menu">
                                            Новости
                                        </NavLink>
                                    </div>
                                </div>}
                            </div>
                            <div className="pages_head">
                                <NavLink to="/contact" className="page" onClick={() => setInfo(false) || setBooking(false) || setAbout(false)}>Контакты</NavLink>
                            </div>
                            {local ?
                                <div className="pages_head">
                                    <NavLink to="/dashboard" className="pagereg" onClick={() => setInfo(false) || setBooking(false) || setAbout(false)}> <div className="register">Личный кабинет</div></NavLink>
                                </div>
                                :
                                <>
                                    <div className="login">
                                        <div className="pages_head">
                                            <NavLink to="/register" className="page link" onClick={() => setInfo(false) || setBooking(false) || setAbout(false)}>Регистрация</NavLink>
                                        </div>
                                        <div className="pages_head">
                                            <NavLink to="/login" className="pagereg" onClick={() => setInfo(false) || setBooking(false) || setAbout(false)}> <div className="register">Войти</div> </NavLink>
                                        </div>
                                    </div>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header