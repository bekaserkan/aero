import React from 'react'
import "./IconsComponi.css"
import Slider from 'react-slick';
import icon_componi from "../../img/icon_componi.jpeg"

const IconsComponi = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

    return (
        <div className='icons_componi'>
            <div className="container">
                <Slider {...settings}>
                    <div className='slide_image'>
                        <img src={icon_componi} alt="" />
                    </div>
                    <div className='slide_image'>
                        <img src={icon_componi} alt="" />
                    </div>
                    <div className='slide_image'>
                        <img src={icon_componi} alt="" />
                    </div>
                    <div className='slide_image'>
                        <img src={icon_componi} alt="" />
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default IconsComponi