import React, { useState } from 'react'
import "./InfoPage.css"
import info_img from "../../img/Info_img.svg"
import { NavLink, useParams } from 'react-router-dom'
import arrow_down from "../../img/arrow_down.svg"
import arrow_up from "../../img/arrow_up.svg"
import arrow_whihe from "../../img/arrow_direct_white.svg"

const InfoPage = () => {
    const [trip, setTrip] = useState(false)
    const [bron, setBron] = useState(false)
    const { info } = useParams()

    return (
        <div className='info_page'>
            {info == "dog"}
            <div className="container">
                <img className='image' src={info_img} alt="" />
                <div className="contant">
                    <div className="width">
                        <h2>Перевозка питомцев</h2>
                        <p>Для перевозки животных в салоне самолета, пассажиру необходимо уведомить авиакомпанию о перевозке при бронировании, покупке авиабилета или по телефону службы поддержки пассажиров, поскольку перевозка животных производится с согласия авиакомпании и существуют ограничения по количеству и видам перевозимых животных и птиц.</p>
                        <p>В салоне самолёта разрешено перевозить животных в клетках / переносках в сопровождении совершеннолетнего дееспособного пассажира. В клетке / переноске могут находиться несколько животных или птиц одного вида. Размещение животных либо птиц в контейнере/клетке должно быть свободным и комфортным для питомцев. Если переноска выполнена из плотного текстиля (является мягкой), то размер клетки /переноски не должен превышать параметров 45x35x25 см. В случае, если переноска/клетка имеют жесткий каркас, то допустимые габариты – 45х35х22 см. Общий вес вместе с клеткой до 8 кг.</p>
                        <p>Прямое авиасообщение между Бишкеком и Сеулом планируется запустить 11 июня текущего года. Об этом стало известно в ходе встречи посла Кыргызской Республики в Республике Корея Аиды Исмаиловой с президентом авиакомпании T’way Енг Хонг Геном. Узнать больше: https://vesti.kg/obshchestvo/item/111363-v-iyune-nachnut-letat-pryamye-rejsy-bishkek-seul.html - В июне начнут летать прямые рейсы Бишкек — Сеул - Вести.kg - Новости Кыргызстана</p>
                    </div>
                    <div className="drop_down">
                        <div onClick={() => setTrip(!trip) || setBron(false)} className="drop_trip">
                            О поездке
                            {trip ?
                                <img src={arrow_up} alt="" />
                                :
                                <img src={arrow_down} alt="" />
                            }
                        </div>
                        {trip && <div className='drop'>
                            <NavLink to="" className="drop_contant">Путешествие с детьми <img src={arrow_whihe} alt="" /> </NavLink>
                            <NavLink to="" className="drop_contant">Перевозка беременных  <img src={arrow_whihe} alt="" /> </NavLink>
                            <NavLink to="/info-page/dog" className="drop_contant">Перевозка питомцев <img src={arrow_whihe} alt="" />  </NavLink>
                            <NavLink to="" className="drop_contant">Перевозка питомцев <img src={arrow_whihe} alt="" />  </NavLink>
                        </div>}
                        <div onClick={() => setBron(!bron) || setTrip(false)} className="drop_trip">
                            О бронировании
                            {bron ?
                                <img src={arrow_up} alt="" />
                                :
                                <img src={arrow_down} alt="" />
                            }
                        </div>
                        {bron && <div className='drop'>
                            <NavLink to="" className="drop_contant">Путешествие с детьми <img src={arrow_whihe} alt="" /> </NavLink>
                            <NavLink to="" className="drop_contant">Перевозка беременных  <img src={arrow_whihe} alt="" /> </NavLink>
                            <NavLink to="" className="drop_contant">Перевозка питомцев <img src={arrow_whihe} alt="" />  </NavLink>
                            <NavLink to="" className="drop_contant">Перевозка питомцев <img src={arrow_whihe} alt="" />  </NavLink>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoPage