import React, { useState } from 'react'
import "./ForgotPassword.css"
import Loading from "../../components/UI/Loading/Loading";
import { useNavigate } from "react-router-dom";
import { url } from "../../Api";
import axios from "axios";

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState([]);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(url + "/auth/forgot-password/", {
        email,
      });
      if (response.data.response === true) {
        alert(response.data.message, "success");
        navigate("/login");
      } else {
        if (response.data.message) {
          alert(response.data.message, "error");
        }
        setError(response.data);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div className='forgot_password'>
      <div className="container">
        <div className="login_form">
          <div className="login_form_head">
            <span className='h1'>
              Восстановить аккаунт
            </span>
          </div>
          <div className="login_form_body">
            <form onSubmit={handleSubmit} className="form_forgot">
              <p>Укажите ваш Email, который использовался при регистрации</p>
              <div className="input_box">
                <label className="label_form">E-mail</label>
                <input
                  className="input_form"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  placeholder="E-mail"
                />
                {error.email && <p className="red">{error.email}</p>}
              </div>
              <button onSubmit={handleSubmit} className="button_form">
                {loading ? <Loading color={"#fff"} /> : "Отправить"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword