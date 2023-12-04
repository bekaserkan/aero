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
                            <NavLink to="/">
                                <img src={logo} alt="" />
                            </NavLink>
                        </div>
                        <div className='pages_head'>
                            <div onClick={() => setBooking(!booking) || setInfo(false) || setAbout(false)} className="page">Бронирование и управление </div>
                        </div>
                        {booking && <div className="menu">
                            <div className="menu_one">
                                <div className='page_menu_div'>Планирование</div>
                                <NavLink to="" className="page_menu">
                                    <IoIosAirplane size={30} color='var(--blue)' /> Чартерные перевозки
                                </NavLink>
                                <NavLink to="" className="page_menu">
                                    <IoIosAirplane size={30} color='var(--blue)' /> Расписание рейсов
                                </NavLink>
                                <NavLink to="" className="page_menu">
                                    <IoIosAirplane size={30} color='var(--blue)' /> Наши направления
                                </NavLink>
                            </div>
                            <div className="menu_two">
                                <div className='page_menu_div'>Управление бронированием</div>
                                <NavLink to="" className="page_menu">
                                    <IoIosAirplane size={30} color='var(--blue)' /> Онлаин регистрация
                                </NavLink>
                                <NavLink to="" className="page_menu">
                                    <IoIosAirplane size={30} color='var(--blue)' /> Купить багаж
                                </NavLink>
                                <NavLink to="" className="page_menu">
                                    <IoIosAirplane size={30} color='var(--blue)' /> Управление бронированием
                                </NavLink>
                            </div>
                        </div>}
                        <div className='pages_head'>
                            <div onClick={() => setInfo(!info) || setBooking(false) || setAbout(false)} className="page">Информация</div>
                        </div>
                        {info && <div className="menu">
                            <div className="menu_one">
                                <div className='page_menu_div'>Информация о поездке</div>
                                <NavLink to="" className="page_menu">
                                    <IoIosAirplane size={30} color='var(--blue)' /> Багаж
                                </NavLink>
                                <NavLink to="" className="page_menu">
                                    <IoIosAirplane size={30} color='var(--blue)' /> Нормы бесплатного провоза багажа
                                </NavLink>
                                <NavLink to="" className="page_menu">
                                    <IoIosAirplane size={30} color='var(--blue)' /> Ручная кладь
                                </NavLink>
                                <NavLink to="" className="page_menu">
                                    <IoIosAirplane size={30} color='var(--blue)' /> Путешествие с детьми и младенцами
                                </NavLink>
                                <NavLink to="" className="page_menu">
                                    <IoIosAirplane size={30} color='var(--blue)' />Перевозка несопровождаемых детей
                                </NavLink>
                                <NavLink to="" className="page_menu">
                                    <IoIosAirplane size={30} color='var(--blue)' /> Перевозка беременных женщин
                                </NavLink>
                                <NavLink to="" className="page_menu">
                                    <IoIosAirplane size={30} color='var(--blue)' />   Перевозка питомцев
                                </NavLink>
                            </div>
                            <div className="menu_two">
                                <div className='page_menu_div'>Информация о бронировании</div>
                                <NavLink to="" className="page_menu">
                                    <IoIosAirplane size={30} color='var(--blue)' /> Как забронировать билет?
                                </NavLink>
                                <NavLink to="" className="page_menu">
                                    <IoIosAirplane size={30} color='var(--blue)' /> Изменение бронирования
                                </NavLink>
                                <NavLink to="" className="page_menu f">
                                    <IoIosAirplane size={30} color='var(--blue)' /> Возврат и отмена
                                </NavLink>
                            </div>
                        </div>}
                        <div className="pages">
                            <div onClick={() => setAbout(!about) || setInfo(false) || setBooking(false)} className="page">О компании</div>
                            {about && <div className="menu d">
                                <div>
                                    <NavLink to="" className="page_menu">
                                        <IoIosAirplane size={30} color='var(--blue)' /> О компании
                                    </NavLink>
                                    <NavLink to="" className="page_menu">
                                        <IoIosAirplane size={30} color='var(--blue)' /> Галерея
                                    </NavLink>
                                    <NavLink to="" className="page_menu">
                                        <IoIosAirplane size={30} color='var(--blue)' /> Бортовой журнал
                                    </NavLink>
                                </div>
                            </div>}
                        </div>
                        <div className="pages_head">
                            <NavLink to="/contact" className="page">Контакты</NavLink>
                        </div>
                        {local ?
                            <div className="pages_head">
                                <NavLink to="/dashboard" className="pagereg"> <div className="register">Личный кабинет</div></NavLink>
                            </div>
                            :
                            <>
                                <div className="pages_head">
                                    <NavLink to="/login" className="page">Войти</NavLink>
                                </div>
                                <div className="pages_head">
                                    <NavLink to="/register" className="pagereg"> <div className="register">Регистрация</div> </NavLink>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header