import React, { useState } from 'react'
import "./Ticket.css"
import air from "../../img/air.svg"
import line1 from "../../img/Line 1.svg"
import line2 from "../../img/Line 2.svg"
import refresh from "../../img/refresh.svg"
import close from "../../img/close.svg"

const Ticket = () => {
  const [modal, setModal] = useState(true)

  return (
    <div className='ticket'>
      <div className="container">
        <div className="search_block">
          <div className='search_div' >
            <input className='border1' type="text" placeholder='Откуда?' />
            <input type="text" placeholder='Куда?' />
            <input type="date" />
            <input type="date" />
            <input className='border2' type="text" />
          </div>
          <button>Найти</button>
        </div>
        <div className="contant">
          <div className="ticket_box">
            <div className="air">
              <div>
                <div className="title">
                  16:55
                </div>
                <p>Бишкек</p>
              </div>
              <div className="air_contant">
                <p>4 ч 40 м</p>
                <div className="air_and_line">
                  <img src={line1} alt="" />
                  <img src={air} alt="" />
                  <img src={line2} alt="" />
                </div>
                <p>Без пересадок</p>
              </div>
              <div>
                <div className='title'>
                  18:50
                </div>
                <p>Москва</p>
              </div>
            </div>
            <div className="summa">
              <div className="price">
                19 799 c
              </div>
              <p>За всех пассажиров</p>
              <button>Выбрать</button>
            </div>
          </div>
          <div className="ticket_box">
            <div className="air">
              <div>
                <div className="title">
                  16:55
                </div>
                <p>Бишкек</p>
              </div>
              <div className="air_contant">
                <p>4 ч 40 м</p>
                <div className="air_and_line">
                  <img src={line1} alt="" />
                  <img src={air} alt="" />
                  <img src={line2} alt="" />
                </div>
                <p>Без пересадок</p>
              </div>
              <div>
                <div className='title'>
                  18:50
                </div>
                <p>Москва</p>
              </div>
            </div>
            <div className="summa">
              <div className="price">
                19 799 c
              </div>
              <p>За всех пассажиров</p>
              <button>Выбрать</button>
            </div>
          </div>
          <div className="ticket_box">
            <div className="air">
              <div>
                <div className="title">
                  16:55
                </div>
                <p>Бишкек</p>
              </div>
              <div className="air_contant">
                <p>4 ч 40 м</p>
                <div className="air_and_line">
                  <img src={line1} alt="" />
                  <img src={air} alt="" />
                  <img src={line2} alt="" />
                </div>
                <p>Без пересадок</p>
              </div>
              <div>
                <div className='title'>
                  18:50
                </div>
                <p>Москва</p>
              </div>
            </div>
            <div className="summa">
              <div className="price">
                19 799 c
              </div>
              <p>За всех пассажиров</p>
              <button>Выбрать</button>
            </div>
          </div>
          <div className="ticket_box">
            <div className='flex'>
              <div className="air">
                <div>
                  <div className="title">
                    16:55
                  </div>
                  <p>Бишкек</p>
                </div>
                <div className="air_contant">
                  <p>4 ч 40 м</p>
                  <div className="air_and_line">
                    <img src={line1} alt="" />
                    <img src={air} alt="" />
                    <img src={line2} alt="" />
                  </div>
                  <p>Без пересадок</p>
                </div>
                <div>
                  <div className='title'>
                    18:50
                  </div>
                  <p>Москва</p>
                </div>
              </div>
              <div className="air">
                <div>
                  <div className="title">
                    16:55
                  </div>
                  <p>Бишкек</p>
                </div>
                <div className="air_contant">
                  <p>4 ч 40 м</p>
                  <div className="air_and_line">
                    <img src={line1} alt="" />
                    <img src={air} alt="" />
                    <img src={line2} alt="" />
                  </div>
                  <p>Без пересадок</p>
                </div>
                <div>
                  <div className='title'>
                    18:50
                  </div>
                  <p>Москва</p>
                </div>
              </div>
            </div>
            <div className="summa">
              <div className="btn"></div>
              <div>
                <div className="price">
                  19 799 c
                </div>
                <p>За всех пассажиров</p>
              </div>
              <button>Выбрать</button>
            </div>
          </div>
        </div>
      </div>
      {modal &&
        <div className="fixet_modal">
          <div onClick={() => setModal(false)} className="modal_not"></div>
          <div className="modal">
            <img src={refresh} alt="" />
            <img onClick={() => setModal(false)} className='close' src={close} alt="" />
            <p className="modal_title">
              Результаты могли устареть
            </p>
            <p className='modal_text'>
              Цены на билеты обновляются около 10 раз в день. Обновите поиск, чтобы увидеть точные даты
            </p>
            <button className='modal_btn'>Обновить</button>
          </div>
        </div>
      }
    </div>
  )
}

export default Ticket