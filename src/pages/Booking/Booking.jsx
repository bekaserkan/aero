import React from 'react'
import "./Booking.css"
import air from "../../img/air.svg"
import line1 from "../../img/Line 1.svg"
import line2 from "../../img/Line 2.svg"
import { useNavigate } from 'react-router-dom'
import info from "../../img/info.svg"

const Booking = () => {
    const navigate = useNavigate()

    return (
        <div className='booking'>
            <div className="container">
                <div className="booking_body">
                    <div>
                        <div className="ticket_box">
                            <div className="title">
                                Ваш билет
                            </div>
                            <div className="air">
                                <div>
                                    <div className="title">
                                        16:55
                                    </div>
                                    <p>Бишкек</p>
                                </div>
                                <div className="air_contant">
                                    <p>4 ч 40 м</p>
                                    <div className="air_and_line">
                                        <img src={line1} alt="" />
                                        <img src={air} alt="" />
                                        <img src={line2} alt="" />
                                    </div>
                                    <p>Без пересадок</p>
                                </div>
                                <div>
                                    <div className='title'>
                                        18:50
                                    </div>
                                    <p>Москва</p>
                                </div>
                            </div>
                        </div>
                        <div className="booking_box">
                            <div className="title">
                                Уже есть аккаунт?
                            </div>
                            <p>Войдите в аккаунт, чтобы ускорить  процесс бронирования</p>
                            <div className="flex">
                                <button onClick={() => navigate("/login")} className='btn'>Войти</button>
                            </div>
                        </div>
                        <div className="booking_box">
                            <div className="title">
                                Контактная информация
                            </div>
                            <p>Вся информация о билетах будет отправляться на указанные контакты</p>
                            <div className="flex">
                                <input type="text" placeholder='Электронная почта' />
                                <input type="text" placeholder='Номер телефона' />
                            </div>
                        </div>
                        <div className="booking_box">
                            <div className="title">
                                1-пассажир(от 12 лет)
                            </div>
                            <p> <img src={info} alt="" /> Для перелета на данном рейсе необходимо указывать данные латинскими буквами!</p>
                            <div className="flex">
                                <input type="text" placeholder='Гражданство' />
                                <input type="text" placeholder='Тип документа' />
                                <input type="text" placeholder='Номер документа' />
                                <input type="text" placeholder='Срок дейсвтия' />
                                <input type="text" placeholder='Имя' />
                                <input type="text" placeholder='Фамилия' />
                                <input type="date" placeholder='Дата рождения' />
                                <div className='btns'>
                                    <button>Мужской</button>
                                    <button>Женский</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="summa">
                            <div className="title">
                                Итоговая сумма:
                            </div>
                            <div className="price">
                                19 799 c
                            </div>
                            <p>За всех пассажиров</p>
                            <button>Выбрать</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Booking