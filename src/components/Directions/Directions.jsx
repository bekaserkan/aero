import React from 'react'
import "./Directions.css"
import arrow from "../../img/arrow_direct.svg"
import { NavLink } from 'react-router-dom'

const Directions = () => {
    return (
        <div className='directions'>
            <div className="container">
                <div className="current_head">
                    <h2>Популярные направления</h2>
                    <NavLink to="" className="direct" >Все направления <img src={arrow} alt="" /></NavLink>
                </div>
                <div className="directions_contant">
                    <div className='directions_box'>
                        <div className="city">Москва</div>
                    </div>
                    <div className='directions_box'>
                        <div className="city">Ош</div>
                    </div>
                    <div className='directions_box'>
                        <div className="city">Сургут</div>
                    </div>
                    <div className='directions_box'>
                        <div className="city">Стамбул</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Directions