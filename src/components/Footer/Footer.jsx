import React from 'react'
import "./Footer.css"
import logo from "../../img/logo_f.png"
import { NavLink } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa6";
import { ImFacebook2 } from "react-icons/im";

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="foot">
                    <div>
                        <NavLink to="/">
                            <img src={logo} alt="" />
                        </NavLink>
                        <p>Aero Nomad Airlines © 2023.</p>
                        <p>Все права защищены.</p>
                    </div>
                    <div className='foot_div'>
                        <NavLink to="" className="foot_text">О компании</NavLink>
                        <NavLink to="" className="foot_text">Контакты</NavLink>
                        <NavLink to="" className="foot_text">Направления</NavLink>
                        <NavLink to="" className="foot_text">Политика</NavLink>
                        <NavLink to="" className="foot_text">конфиденциальности</NavLink>
                    </div>
                    <div className='foot_div'>
                        <NavLink to="" className="foot_text">Новости</NavLink>
                        <NavLink to="" className="foot_text">Галерея</NavLink>
                        <NavLink to="" className="foot_text">Войти</NavLink>
                    </div>
                    <div>
                        <h3>Присоединяйтесь:</h3>
                        <div className='icons'>
                            <ImFacebook2 color='var(--white)' size={30} />
                            <FaInstagram color='var(--white)' size={30} />
                        </div>
                        <p>Разработка и поддержка сайта kvskg.ru</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer