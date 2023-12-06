import React from 'react'
import "./NewsCompony.css"
import arrow from "../../img/arrow_direct_white.svg"
import news_photo from "../../img/news_photo.svg"

const NewsCompony = () => {
    return (
        <div className='news_compony'>
            <div className="container">
                <h2>Новости</h2>
                <div className="contant">
                    <div className="news_compony_block">
                        <img className='image' src={news_photo} alt="" />
                        <span className='title'>
                            На Чукотке пропал самолёт Ан-2 с тремя людьми на борту
                        </span>
                        <p>На Чукотке перестал выходить на связь самолёт Ан-2, на борту которого находились три человека — два члена экипажа и один пассажир. Об этом РИА Новости сообщил представитель регионального главка МЧС.</p>
                        <div className="flex">
                            <span className='date'>
                                10 декабря 2023
                            </span>
                            <img src={arrow} alt="" />
                        </div>
                    </div>
                    <div className="news_compony_block">
                        <img className='image' src={news_photo} alt="" />
                        <span className='title'>
                            На Чукотке пропал самолёт Ан-2 с тремя людьми на борту
                        </span>
                        <p>На Чукотке перестал выходить на связь самолёт Ан-2, на борту которого находились три человека — два члена экипажа и один пассажир. Об этом РИА Новости сообщил представитель регионального главка МЧС.</p>
                        <div className="flex">
                            <span className='date'>
                                10 декабря 2023
                            </span>
                            <img src={arrow} alt="" />
                        </div>
                    </div>
                    <div className="news_compony_block">
                        <img className='image' src={news_photo} alt="" />
                        <span className='title'>
                            На Чукотке пропал самолёт Ан-2 с тремя людьми на борту
                        </span>
                        <p>На Чукотке перестал выходить на связь самолёт Ан-2, на борту которого находились три человека — два члена экипажа и один пассажир. Об этом РИА Новости сообщил представитель регионального главка МЧС.</p>
                        <div className="flex">
                            <span className='date'>
                                10 декабря 2023
                            </span>
                            <img src={arrow} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsCompony