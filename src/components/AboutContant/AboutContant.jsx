import React from 'react'
import "./AboutContant.css"
import about_img from "../../img/about_img.svg"

const AboutContant = () => {
    return (
        <div className='about_contant'>
            <div className="container">
                <div className="contant">
                    <h2 className='block'>О нас</h2>
                    <img src={about_img} alt="" />
                    <div>
                        <h2 className='none'>О нас</h2>
                        <p>В салоне самолёта разрешено перевозить животных в клетках / переносках в сопровождении совершеннолетнего дееспособного пассажира. В клетке / переноске могут находиться несколько животных или птиц одного вида. Размещение животных либо птиц в контейнере/клетке должно быть свободным и комфортным для питомцев. Если переноска выполнена из плотного текстиля (является мягкой), то размер клетки /переноски не должен превышать параметров 45x35x25 см.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContant