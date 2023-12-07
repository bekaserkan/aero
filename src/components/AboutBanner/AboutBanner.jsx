import React from 'react'
import "./AboutBanner.css"
import banner from "../../img/about_banner.svg"

const AboutBanner = () => {
    return (
        <div className='about_banner'>
            <div className="container">
                <img src={banner} alt="" />
            </div>
        </div>
    )
}

export default AboutBanner