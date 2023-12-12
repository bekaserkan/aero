import React from 'react'
import "./DetailTicket.css"
import air from "../../img/air.svg"
import line1 from "../../img/Line 1.svg"
import line2 from "../../img/Line 2.svg"

const DetailTicket = () => {
    return (
        <div className='detail_ticket'>
            <div className="container">
                <div className="wrapper">
                    <div className="block">
                        <span className='title'>Детали билета</span>
                        <span className='code'>#P34633374586</span>
                        <span className='status green'>В ожидании <div className="circle green"></div> </span>
                    </div>
                    <p className='text'>Билет оплачен и выписан</p>
                    <p className='contant_text'>Покупка 1-декабря, пт</p>
                    <div className="nav">
                        <div className="ticket_box">
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
                            <div className="summa">
                                <div className="price">
                                    19 799 c
                                </div>
                                <p>За всех пассажиров</p>
                                <p>4-декабря, пн</p>
                                <p>Эконом/Лайт</p>
                            </div>
                        </div>
                        <div className="btns">
                            <div className="btn">
                                Маршрутная квитанция
                            </div>
                            <div className="btn">
                                Электронный чек
                            </div>
                            <div className="btn">
                                Оформить возврат
                            </div>
                        </div>
                        <div className="box">
                            <div className="box_title">
                                nurzida asanbekova
                            </div>
                            <div className="box_text">
                                PNR: JR03MI, e-ticket: 07K6116571109
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailTicket