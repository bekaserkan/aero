import React, { useEffect, useState } from 'react'
import "./Header.css"
import { NavLink } from 'react-router-dom'
import profile from "../../img/profile.svg"
import { MdClose } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const Header = ({ local }) => {
    const [booking, setBooking] = useState(false)
    const [info, setInfo] = useState(false)
    const [about, setAbout] = useState(false)
    const [menu, setMenu] = useState(false)
    const [bookingMenu, setBookingMenu] = useState(false)
    const [infoMenu, setInfoMenu] = useState(false)
    const [aboutMenu, setAboutMenu] = useState(false)

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
                <div className="container one">
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
                                        <NavLink to="/about" className="page_menu">
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
                                    <NavLink to="/dashboard" className="pagereg" onClick={() => setInfo(false) || setBooking(false) || setAbout(false)}> <img className='profile_image' src={profile} alt="" /></NavLink>
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
                <div className="container two">
                    <div onClick={() => setMenu(true)} className="burger">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <NavLink to="/" className='title_burger'>Airtickets</NavLink>
                    <NavLink className="login" to="/login">
                        Войти
                    </NavLink>
                </div>
                {menu &&
                    <div className="menu_modal">
                        <div onClick={() => setMenu(false)} className="menu_not"></div>
                        <div className="menu_container">
                            <MdClose onClick={() => setMenu(false)} className='close' />
                            <p onClick={() => setBookingMenu(!bookingMenu) || setAboutMenu(false) || setInfoMenu(false) || setMenu(false)} className={bookingMenu ? "menu_link active" : 'menu_link'}>
                                Бронирование и управление {bookingMenu ? <IoIosArrowDown className='menu_close_icon' /> : <IoIosArrowUp className='menu_open_icon' />}
                            </p>
                            {bookingMenu && <div className="menu_group">
                                <p className='menu_big'>Планирование</p>
                                <NavLink onClick={() => setMenu(false)} className='menu_small'>Багаж</NavLink>
                                <NavLink onClick={() => setMenu(false)} className='menu_small'>Чартерные перевозки</NavLink>
                                <NavLink onClick={() => setMenu(false)} className='menu_small'>Расписание рейсов</NavLink>
                                <NavLink onClick={() => setMenu(false)} className='menu_small'>Наши направления</NavLink>
                                <p className='menu_big'>Управление бронированием</p>
                                <NavLink onClick={() => setMenu(false)} className='menu_small'>Онлаин регистрация</NavLink>
                                <NavLink onClick={() => setMenu(false)} className='menu_small'>Купить багаж</NavLink>
                                <NavLink onClick={() => setMenu(false)} className='menu_small'>Управление бронированием</NavLink>
                            </div>}
                            <p onClick={() => setInfoMenu(!infoMenu) || setBookingMenu(false) || setAboutMenu(false) || setMenu(false)} className={infoMenu ? "menu_link active" : 'menu_link'}>
                                Информация {infoMenu ? <IoIosArrowDown className='menu_close_icon' /> : <IoIosArrowUp className='menu_open_icon' />}
                            </p>
                            {infoMenu && <div className="menu_group">
                                <p className='menu_big'>О поездке</p>
                                <NavLink onClick={() => setMenu(false)} to="" className='menu_small'>Багаж</NavLink>
                                <NavLink onClick={() => setMenu(false)} to="" className='menu_small'>Нормы бесплатного провоза багажа</NavLink>
                                <NavLink onClick={() => setMenu(false)} to="" className='menu_small'>Путешествие с детьми и младенцами</NavLink>
                                <NavLink onClick={() => setMenu(false)} to="" className='menu_small'>Перевозка несопровождаемых детей</NavLink>
                                <NavLink onClick={() => setMenu(false)} to="" className='menu_small'>Перевозка беременных женщин</NavLink>
                                <NavLink onClick={() => setMenu(false)} to="/info-page/dog" className='menu_small'>Перевозка питомцев</NavLink>
                                <p className='menu_big'>О бронировании</p>
                                <NavLink onClick={() => setMenu(false)} to="" className='menu_small'>Как забронировать билет</NavLink>
                                <NavLink onClick={() => setMenu(false)} to="" className='menu_small'>Изменение бронирования</NavLink>
                                <NavLink onClick={() => setMenu(false)} to="" className='menu_small'>Возврат и отмена</NavLink>
                            </div>}
                            <p onClick={() => setAboutMenu(!aboutMenu) || setInfoMenu(false) || setBookingMenu(false) || setMenu(false)} className={aboutMenu ? "menu_link active" : 'menu_link'}>
                                О компании {aboutMenu ? <IoIosArrowDown className='menu_close_icon' /> : <IoIosArrowUp className='menu_open_icon' />}
                            </p>
                            {aboutMenu && <div className="menu_group">
                                <p className='menu_big'>О компании</p>
                                <NavLink onClick={() => setMenu(false)} to="" className='menu_small'>О нас</NavLink>
                                <NavLink onClick={() => setMenu(false)} to="" className='menu_small'>Наши партнеры</NavLink>
                                <NavLink onClick={() => setMenu(false)} to="" className='menu_small'>Новости</NavLink>
                            </div>}
                            <p className='menu_link'>Контакты</p>
                        </div>
                    </div>
                }
            </div >
        </>
    )
}

export default Header