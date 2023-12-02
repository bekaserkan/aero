import React from 'react'
import "./Directions.css"
import surgut from "../../img/surgut.jpeg"
import moskva from "../../img/moskva.jpeg"
import deli from "../../img/deli.jpeg"

const Directions = () => {
    return (
        <div className='directions'>
            <div className="container">
                <div className="contant">
                    <h1>Наши направления</h1>
                    <div class="zoom-container">
                        <div class="zoom-img-container">
                            <img src={deli} alt="" />
                        </div>
                        <p>Купить билет</p>
                    </div>
                    <div class="zoom-container">
                        <div class="zoom-img-container">
                            <img src={moskva} alt="" />
                        </div>
                        <p>Купить билет</p>
                    </div>
                    <div class="zoom-container">
                        <div class="zoom-img-container">
                            <img src={surgut} alt="" />
                        </div>
                        <p>Купить билет</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Directions