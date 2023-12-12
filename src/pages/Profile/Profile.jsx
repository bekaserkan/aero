import React, { useState } from 'react'
import "./Profile.css"
import empty from "../../img/empty_bought_tickets.png"
import arrow from "../../img/arrow_direct.svg"
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    const [data, setData] = useState(true)
    const [ticket, setTicket] = useState(false)
    const navigate = useNavigate()

    return (
        <div className='profile'>
            <div className="container">
                <div className="title">Профиль</div>
                <div className="profile_head">
                    <div onClick={() => setData(true) || setTicket(false)} className={data ? "profile_page active" : "profile_page"}>
                        Личные данные
                    </div>
                    <div onClick={() => setData(false) || setTicket(true)} className={ticket ? "profile_page active" : "profile_page"}>
                        Мои билеты
                    </div>
                </div>
                {ticket && <div className="ticket_profile">
                    <div onClick={() => navigate("/detail-ticket/1")} className="bilet">
                        <div className="flex_box">
                            <div className="flex">
                                <span className="flex_title">
                                    Авиабилет
                                </span>
                                <span className="flex_code">
                                    #P34633374586
                                </span>
                            </div>
                            <div className="flex">
                                <div>
                                    <div className="date">
                                        16:55
                                        <p>Бишкек</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="date">
                                        18:50
                                        <p>Москва</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <p>1 пассажир</p>
                                <p>4-декабря, пн</p>
                            </div>
                        </div>
                        <div className="border">
                            <span className='status green'>В ожидании <div className="circle green"></div> </span>
                            <img src={arrow} alt="" />
                        </div>
                    </div>
                    <div className="bilet">
                        <div className="flex_box">
                            <div className="flex">
                                <span className="flex_title">
                                    Авиабилет
                                </span>
                                <span className="flex_code">
                                    #P34633374586
                                </span>
                            </div>
                            <div className="flex">
                                <div>
                                    <div className="date">
                                        16:55
                                        <p>Бишкек</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="date">
                                        18:50
                                        <p>Москва</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <p>1 пассажир</p>
                                <p>4-декабря, пн</p>
                            </div>
                        </div>
                        <div className="border">
                            <span className='status gray'>Архив <div className="circle gray"></div> </span>
                            <img src={arrow} alt="" />
                        </div>
                    </div>
                    <div className="bilet">
                        <div className="flex_box">
                            <div className="flex">
                                <span className="flex_title">
                                    Авиабилет
                                </span>
                                <span className="flex_code">
                                    #P34633374586
                                </span>
                            </div>
                            <div className="flex">
                                <div>
                                    <div className="date">
                                        16:55
                                        <p>Бишкек</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="date">
                                        18:50
                                        <p>Москва</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <p>1 пассажир</p>
                                <p>4-декабря, пн</p>
                            </div>
                        </div>
                        <div className="border">
                            <span className='status red'>Отменен <div className="circle red"></div> </span>
                            <img src={arrow} alt="" />
                        </div>
                    </div>
                    {/* <div className="not_data">
                        <img src={empty} alt="" />
                        <div className="not_data_title">
                            У вас нет купленных билетов
                        </div>
                        <div className="not_data_text">
                            Здесь будут появляться ваши купленные билеты
                        </div>
                    </div> */}
                </div>}
            </div>
        </div>
    )
}

export default Profile