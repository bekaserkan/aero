import React, { useState } from 'react'
import "./Contact.css"
import Here from '../../components/Here/Here';
import adress from "../../img/adress.svg"
import phone from "../../img/phone.svg"
import pochta from "../../img/pochta.svg"

const Contact = () => {
  const [office, setOffice] = useState(true)
  const [representative, setRepresentative] = useState(false)
  const [ticket, setTicket] = useState(false)
  const [transportation, setTransportation] = useState(false)

  return (
    <div className='contact'>
      <div className="container">
        {/* <Here /> */}
        <div className="contact_block">
          <div className="contact_head">
            <div onClick={() => setOffice(true) || setRepresentative(false) || setTicket(false) || setTransportation(false)} className={office ? "btn active" : "btn"}>Офис</div>
            <div onClick={() => setOffice(false) || setRepresentative(true) || setTicket(false) || setTransportation(false)} className={representative ? "btn active" : "btn"}>Представительства</div>
            {/* <div onClick={() => setOffice(false) || setRepresentative(false) || setTicket(true) || setTransportation(false)} className={ticket ? "btn active" : "btn"}>Авиакассы</div> */}
            <div onClick={() => setOffice(false) || setRepresentative(false) || setTicket(false) || setTransportation(true)} className={transportation ? "btn active" : "btn"}>Грузоперевозки</div>
          </div>
          {office &&
            <div className="contact_body">
              <span className='h1'>
                Офис
              </span>
              <div className="contant w">
                <div className="contact_box">
                  <img className='icon' src={adress} alt="" />
                  <p>Кыргызская Республика г. Бишкек, Ул. Абдумомунова 286/1</p>
                </div>
                <div className="contact_box">
                  <img className='icon' src={phone} alt="" />
                  <p>+996 312-97-99-55</p>
                </div>
                <div className="contact_box">
                  <img className='icon' src={pochta} alt="" />
                  <a href="https://help@aeronomad.kg">help@aeronomad.kg</a>
                </div>
              </div>
              <div className="map">
                <iframe
                  className='map_google'
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.1627880977467!2d74.58461617616636!3d42.86940810277055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec9a0360ea95b%3A0x1484f7504c9ac9b4!2sNOVOTEL%20Bishkek%20City%20Center!5e0!3m2!1sru!2skg!4v1701429962966!5m2!1sru!2skg"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>}
          {representative &&
            <div className="contact_body">
              <span className='h1'>
                Представительства
              </span>
              <div className="contant w">
                <div className="contact_box">
                  <img className='icon' src={adress} alt="" />
                  <div className='box'>
                    <span className='h3'>
                      г. Москва:
                    </span>
                    <p>ООО «Трансагентство Внуково»</p>
                  </div>
                </div>
                <div className="contact_box">
                  <img className='icon' src={phone} alt="" />
                  <p>+996 990-17-08-08</p>
                </div>
                <div className="contact_box">
                  <img className='icon' src={pochta} alt="" />
                  <a href="https://ttvtnsk@gmail.com">ttvtnsk@gmail.com</a>
                </div>
              </div>
              <div className="contant">
                <div className="contact_box">
                  <img className='icon' src={adress} alt="" />
                  <div className='box'>
                    <span className='h3'>
                      г. Иркутск
                    </span>
                    <p>третий этаж внутреннего терминала аэропорта Иркутск</p>
                  </div>
                </div>
                <div className="contact_box">
                  <img className='icon' src={phone} alt="" />
                  <p>+7 932 406-20-20</p>
                </div>
                <div className="contact_box">
                  <img className='icon' src={adress} alt="" />
                  <a href="https://partkja@gmail.com">partkja@gmail.com</a>
                </div>
              </div>
            </div>}
          {/* {ticket &&
            <div className="contact_body">
              <span className='h1'>
                Авиакассы
              </span>
              <div className="contact_box">

                <div className='box'>
                  <span className='h3'>
                    г. Москва
                  </span>
                  <p>м.Текстильщики</p>
                  <p>ул.Люблинская, д.4, к.1а</p>
                  <p>ТЦ «Мост», на.57, 2 этаж</p>
                  <p>+7 926 11-33-465</p>
                  <p>+7 999-921-07-62</p>
                  <p>+7 926-234-33-58</p>
                </div>
              </div>
              <div className="contact_box">

                <div className='box'>
                  <span className='h3'>
                    г. Дели
                  </span>
                  <p>Minar Travels (India) Pvt ltd</p>
                  <p>M-34 Outer Circle, Connaught Place New Delhi</p>
                  <p>Тел: +91 11-434-16-450</p>
                  <div style={{ display: "flex", gap: 3 }}>
                    <p>Email:</p>
                    <a href="https://aeronomadsales@minar.group">aeronomadsales@minar.group</a>
                  </div>
                </div>
              </div>
            </div>} */}
          {transportation &&
            <div className="contact_body">
              <span className='h1'>
                Грузоперевозки
              </span>
              <div className="contant w">
                <div className="contact_box">
                  <img className='icon' src={adress} alt="" />
                  <div className='box'>
                    <span className='h3'>
                      Кыргызстан
                    </span>
                    <p>г.Бишкек САФ Кейджи (SAF KG)</p>
                  </div>
                </div>
                <div className="contact_box">
                  <img className='icon' src={phone} alt="" />
                  <p>+996 990-17-08-08</p>
                </div>
                <div className="contact_box">
                  <img className='icon' src={pochta} alt="" />
                  <a href="https://ttvtnsk@gmail.com">ttvtnsk@gmail.com</a>
                </div>
              </div>
              <div className="contant">
                <div className="contact_box">
                  <img className='icon' src={adress} alt="" />
                  <div className='box'>
                    <span className='h3'>
                      Индия
                    </span>
                    <p>г.Дели HERCULES AVIATION</p>
                  </div>
                </div>
                <div className="contact_box">
                  <img className='icon' src={phone} alt="" />
                  <p>+7 932 406-20-20</p>
                </div>
                <div className="contact_box">
                  <img className='icon' src={adress} alt="" />
                  <a href="https://partkja@gmail.com">partkja@gmail.com</a>
                </div>
              </div>
            </div>}
        </div>
      </div>
    </div >
  )
}

export default Contact