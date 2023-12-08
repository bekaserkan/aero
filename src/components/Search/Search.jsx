import React from 'react'
import "./Search.css"
import Slider from 'react-slick';
import slide1 from "../../img/baner.svg"
import slide2 from "../../img/baner2.svg"
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const navigate = useNavigate()

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "linear"
    };

    return (
        <div className='search'>
            <div className="slider_slick">
                <Slider {...settings}>
                    <div className="slider">
                        <img src={slide1} alt="" />
                    </div>
                    <div className="slider">
                        <img src={slide2} alt="" />
                    </div>
                </Slider>
            </div>
            <div className="container">
                <div className="search_block">
                    <div className='search_div' >
                        <input className='border1' type="text" placeholder='Откуда?' />
                        <input type="text" placeholder='Куда?' />
                        <input type="date" />
                        <input type="date" />
                        <input className='border2' type="text" />
                    </div>
                    <button onClick={() => navigate("/ticket")} >Найти</button>
                </div>
            </div>
        </div>
    )
}

export default Search