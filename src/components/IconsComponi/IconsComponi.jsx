import React from 'react'
import "./IconsComponi.css"
import Slider from 'react-slick';
import icon_componi1 from "../../img/icon_compony1.svg"
import icon_componi2 from "../../img/icon_compony2.svg"
import icon_componi3 from "../../img/icon_compony3.svg"
import icon_componi4 from "../../img/icon_compony4.svg"

const IconsComponi = () => {

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
        <div className='icons_componi' >
            <div className="container">
                <Slider {...settings}>
                    <div className='slide_image'>
                        <img src={icon_componi1} alt="" />
                    </div>
                    <div className='slide_image'>
                        <img src={icon_componi2} alt="" />
                    </div>
                    <div className='slide_image'>
                        <img src={icon_componi3} alt="" />
                    </div>
                    <div className='slide_image'>
                        <img src={icon_componi4} alt="" />
                    </div>
                    <div className='slide_image'>
                        <img src={icon_componi2} alt="" />
                    </div>
                </Slider>
            </div>
        </div >
    )
}

export default IconsComponi