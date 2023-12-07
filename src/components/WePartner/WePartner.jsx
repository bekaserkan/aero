import React from 'react'
import "./WePartner.css"
import Slider from 'react-slick';
import icon_componi1 from "../../img/partner1.svg"
import icon_componi2 from "../../img/partner2.svg"
import icon_componi3 from "../../img/partner3.svg"
import icon_componi4 from "../../img/partner4.svg"

const WePartner = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    }

    return (
        <div className='we_partner'>
            <div className="container">
                <h2>Наши партнёры</h2>
                <Slider {...settings}>
                    <div>
                        <div className='slide_image'>
                            <div className="img">
                                <img src={icon_componi1} alt="" />
                            </div>
                            <span className='title'>Международный аэропорт Манас</span>
                        </div>
                    </div>
                    <div>
                        <div className='slide_image'>
                            <div className="img">
                                <img src={icon_componi2} alt="" />
                            </div>
                            <span className='title'>Кыргызский авиационный институт</span>
                        </div>
                    </div>
                    <div>
                        <div className='slide_image'>
                            <div className="img">
                                <img src={icon_componi3} alt="" />
                            </div>
                            <span className='title'>ОсОО «Газпром Кыргызстан»</span>
                        </div>
                    </div>
                    <div>
                        <div className='slide_image'>
                            <div className="img">
                                <img src={icon_componi4} alt="" />
                            </div>
                            <span className='title'>ЗАО «Манас Менеджмент»</span>
                        </div>
                    </div>
                    <div>
                        <div className='slide_image'>
                            <div className="img">
                                <img src={icon_componi1} alt="" />
                            </div>
                            <span className='title'>Международный аэропорт Манас</span>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default WePartner