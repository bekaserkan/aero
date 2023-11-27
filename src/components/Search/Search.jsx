import React from 'react'
import "./Search.css"
import Slider from 'react-slick';
import slide1 from "../../img/search_slider.png"
import slide2 from "../../img/search_slider_tour.png"

const Search = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

    return (
        <div className='search'>
            <Slider {...settings}>
                <div className="slider">
                    <img src={slide1} alt="" />
                </div>
                <div className="slider">
                    <img src={slide2} alt="" />
                </div>
            </Slider>
            <div className="container">
                <div className="search_block">
                    <div className='search_div' >
                        <input type="text" />
                        <input type="text" />
                    </div>
                    <input type="date" />
                    <input type="date" />
                    <input type="text" />
                    <button>Найти билеты</button>
                </div>
            </div>
        </div>
    )
}

export default Search