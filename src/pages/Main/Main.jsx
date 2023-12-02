import React from 'react'
import Search from '../../components/Search/Search'
import Current from '../../components/Current/Current'
import Directions from '../../components/Directions/Directions'
import NewsCompany from '../../components/NewsCompany/NewsCompany'
import MainSliderNews from '../../components/MainSliderNews/MainSliderNews'
import IconsComponi from '../../components/IconsComponi/IconsComponi'

const Main = () => {
    return (
        <div className='main'>
            <Search />
            <Current />
            <Directions />
            <NewsCompany />
            <MainSliderNews />
            <IconsComponi />
        </div>
    )
}

export default Main