import React from 'react'
import "./Header.css"
import { NavLink } from 'react-router-dom'
import logo from "../../img/logo_h.png"

const Header = () => {
    return (
        <>
            <div className="header"></div>
            <div className='header_fixet'>
                <div className="container">
                    <div className="head">
                        <NavLink to="/">
                            <img src={logo} alt="" />
                        </NavLink>
                        <NavLink to="" className="page">Бронирование и управление </NavLink>
                        <NavLink to="" className="page">Информация</NavLink>
                        <NavLink to="" className="page">О компании</NavLink>
                        <NavLink to="" className="page">Контакты</NavLink>
                        <NavLink to="" className="page">Войти</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header