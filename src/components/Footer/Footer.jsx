import React from 'react'
import "./Footer.css"
import { NavLink } from 'react-router-dom'
import tiktok from "../../img/tiktok.svg"
import instagram from "../../img/instagram.svg"
import facebook from "../../img/facebook.svg"

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="foot">
                    <div>
                        <NavLink to="/" className="logo">
                            Airtickets
                        </NavLink>
                        <p>годнее всего всегда оплачивать </p>
                        <p>дополнительный багаж заранее</p>
                        <div className='icons'>
                            <div className="icon">
                                <img src={facebook} alt="" />
                            </div>
                            <div className="icon">
                                <img src={instagram} alt="" />
                            </div>
                            <div className="icon">
                                <img src={tiktok} alt="" />
                            </div>
                        </div>
                        <p className='all'>Все права защищены</p>
                    </div>
                    <div className='foot_div'>
                        <h4>Компания</h4>
                        <NavLink to="" className="foot_text">Бронирование и управление</NavLink>
                        <NavLink to="" className="foot_text">Информация</NavLink>
                        <NavLink to="" className="foot_text">О компании</NavLink>
                        <NavLink to="" className="foot_text">Контакты</NavLink>
                    </div>
                    <div className='foot_div'>
                        <h4>+996 502 800 202</h4>
                        <p>г. Бишкек ул. Токтогула 36/1</p>
                        <p>График работы от 9:00 до 19:00</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer