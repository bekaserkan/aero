import React from 'react'
import "./Current.css"
import { NavLink } from 'react-router-dom'
import flot from "../../img/flot.jpeg"
import children_in_air from "../../img/children_in_air.jpeg"
import bagaj from "../../img/bagaj.jpeg"

const Current = () => {
  return (
    <div className='current'>
        <div className="container">
            <div className="contant">
                <NavLink to="" className="contant_link">
                    <img src={bagaj} alt="" />
                </NavLink>
                <NavLink to="" className="contant_link">
                    <img src={children_in_air} alt="" />
                </NavLink>
                <NavLink to="" className="contant_link">
                    <img src={flot} alt="" />
                </NavLink>
            </div>
        </div>
    </div>
  )
}

export default Current