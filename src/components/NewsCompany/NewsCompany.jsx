import React from 'react'
import "./NewsCompany.css"
import { IoTimeOutline } from "react-icons/io5";
import { BsLink45Deg } from "react-icons/bs";
import surgut from "../../img/surgut.jpeg"
import news_photo from "../../img/surg22_50x50.png"

const NewsCompany = () => {
    return (
        <div className='news_company'>
            <div className="container">
                <div className="news_company_contant">
                    <div className="one">
                        <h1>Новости компании</h1>
                        <div className="contant_div">
                            <h2>Зимние путешествия с Аэро Номад!</h2>
                            <div className="contant_div_box">
                                <img src={news_photo} alt="" />
                                <p>Вы сможете ознакомиться с расписанием полетов на зимний сезон 2023-2024....</p>
                            </div>
                            <div className="contant_div_link">
                                <p> <IoTimeOutline size={20} className='icon' /> 23 ноября 2023 </p>
                                <a href=""><BsLink45Deg size={20} className='icon' />Подробнее</a>
                            </div>
                        </div>
                        <div className="contant_div">
                            <h2>Зимние путешествия с Аэро Номад!</h2>
                            <div className="contant_div_box">
                                <img src={news_photo} alt="" />
                                <p>Вы сможете ознакомиться с расписанием полетов на зимний сезон 2023-2024....</p>
                            </div>
                            <div className="contant_div_link">
                                <p> <IoTimeOutline size={20} className='icon' /> 23 ноября 2023 </p>
                                <a href=""><BsLink45Deg size={20} className='icon' />Подробнее</a>
                            </div>
                        </div>
                        <div className="contant_div">
                            <h2>Зимние путешествия с Аэро Номад!</h2>
                            <div className="contant_div_box">
                                <img src={news_photo} alt="" />
                                <p>Вы сможете ознакомиться с расписанием полетов на зимний сезон 2023-2024....</p>
                            </div>
                            <div className="contant_div_link">
                                <p> <IoTimeOutline size={20} className='icon' /> 23 ноября 2023 </p>
                                <a href=""><BsLink45Deg size={20} className='icon' />Подробнее</a>
                            </div>
                        </div>
                    </div>
                    <div className="two">
                        <img src={surgut} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsCompany