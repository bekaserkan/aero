import React from 'react'
import "./Main.css"
import Search from '../../components/Search/Search'
import Current from '../../components/Current/Current'
import Directions from '../../components/Directions/Directions'
import IconsComponi from '../../components/IconsComponi/IconsComponi'
import NewsCompony from '../../components/NewsCompony/NewsCompony'

const Main = () => {
    return (
        <div className='main'>
            <Search />
            <Directions />
            <Current />
            <IconsComponi />
            <NewsCompony />
        </div>
    )
}

export default Main