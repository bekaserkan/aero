import React from 'react'
import "./About.css"
import AboutBanner from '../../components/AboutBanner/AboutBanner'
import AboutContant from '../../components/AboutContant/AboutContant'
import AboutGalary from '../../components/AboutGalary/AboutGalary'
import WePartner from '../../components/WePartner/WePartner'
import AboutDirect from '../../components/AboutDirect/AboutDirect'

const About = () => {
  return (
    <div className='about'>
      <AboutBanner />
      <AboutContant />
      <AboutGalary />
      <WePartner />
      <AboutDirect />
    </div>
  )
}

export default About