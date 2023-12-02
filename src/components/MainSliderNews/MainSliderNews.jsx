import React from 'react'
import "./MainSliderNews.css"
import Slider from 'react-slick'
import main_news from "../../img/news_img.png"

const MainSliderNews = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

    return (
        <div className='main_slider_news'>
            <div className="container">
                <Slider {...settings}>
                    <div className='slide_image'>
                        <img src={main_news} alt="" />
                    </div>
                    <div className='slide_image'>
                        <img src={main_news} alt="" />
                    </div>
                    <div className='slide_image'>
                        <img src={main_news} alt="" />
                    </div>
                    <div className='slide_image'>
                        <img src={main_news} alt="" />
                    </div>
                    <div className='slide_image'>
                        <img src={main_news} alt="" />
                    </div>
                    <div className='slide_image'>
                        <img src={main_news} alt="" />
                    </div>
                    <div className='slide_image'>
                        <img src={main_news} alt="" />
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default MainSliderNews