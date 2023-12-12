import React from 'react'
import "./Modal.css"
import close from "../../../img/close.svg"

const Modal = ({ img, title, text, btn, setModal }) => {
    return (
        <div className="fixet_modal">
            <div onClick={() => setModal(false)} className="modal_not"></div>
            <div className="modal">
                <img src={img} alt="" />
                <img onClick={() => setModal(false)} className='close' src={close} alt="" />
                <p className="modal_title">
                    {title}
                </p>
                <p className='modal_text'>
                    {text}
                </p>
                <button className='modal_btn'>{btn}</button>
            </div>
        </div>
    )
}

export default Modal