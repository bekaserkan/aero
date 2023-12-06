import React from 'react'
import "./Current.css"
import cart_block from "../../img/cart_block.svg"
import arrow from "../../img/arrow_direct_white.svg"

const Current = () => {
  return (
    <div className='current'>
      <div className="container">
        <h2>Полезный блог</h2>
        <div className="contant">
          <div style={{ background: `url(${cart_block}) no-repeat center / cover` }} className="contant_block f">
            <span className='title'>
              Нормы бесплатного провоза багажа
            </span>
            <div className="flex">
              <p>Нормы бесплатного провоза багажа зависит от направления полёта
                и класса обслуживания</p>
              <img src={arrow} alt="" />
            </div>
          </div>
          <div className="contant_block">
            <div className="contant_box">
              <span className='title'>
                Путешествие с детьми
              </span>
              <div className="flex">
                <p>Советы родителям, планирующим отдых с детьми</p>
                <img src={arrow} alt="" />
              </div>
            </div>
            <div className="contant_box">
              <span className='title'>
                Перевозка питомцев
              </span>
              <div className="flex">
                <p>
                  Узнайте, как купить питомцу билет
                  и как перевозить его в самолете
                </p>
                <img src={arrow} alt="" />
              </div>
            </div>
          </div>
          <div className="contant_block">
            <div className="contant_box">
              <span className='title'>
                Перевозка беременных
              </span>
              <div className="flex">
                <p>На каких условиях принимаются
                  к перевозке беременные женщины</p>
                <img src={arrow} alt="" />
              </div>
            </div>
            <div className="contant_box">
              <span className='title'>
                Возрват и отмена
              </span>
              <div className="flex">
                <p>
                  Возрват и отмена
                  Правила и условия возврата
                  и отмены билетов
                </p>
                <img src={arrow} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Current