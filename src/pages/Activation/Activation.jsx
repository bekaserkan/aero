import React, { useState, useEffect } from "react";
import "./Activation.css";
import Header from "../../components/Header/Header";
import { url } from "../../Api";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/UI/Loading/Loading";

const Activation = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const savedEmail = localStorage.getItem("email");
    if (savedEmail) {
      setEmail(savedEmail);
    }
  }, []);

  const fetchData = async (e) => {
    e.preventDefault();
    if (code.length !== 6) {
      alert("Введите шестизначный код", "error");
    }
    if (code.length == 6) {
      setLoading(true);
      try {
        const response = await axios.post(url + "/auth/verify-email/", {
          code,
          email: email,
        });
        if (response.data.response === true) {
          localStorage.setItem("email", response.data.email);
          localStorage.setItem("token ", response.data.token);
          alert(response.data.message, "success");
          navigate("/dashboard");
        } else {
          alert(response.data.message, "error");
        }
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }
  };

  const Again = async () => {
    const email = localStorage.getItem("email");
    try {
      const response = await axios.post(url + "/auth/re-send/", {
        email: email,
      });
      if (response.data.response == true) {
        alert(response.data.message, "success");
      } else {
        alert(response.data.message, "error");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='activation'>
      <div className="container">
        <div className="login_form">
          <div className="login_form_head">
            <span className="h1">
              Активация аккаунта
            </span>
          </div>
          <div className="login_form_body">
            <p>Введите код, который мы вам отправили на email</p>
            <form onSubmit={fetchData}>
              <input
                style={{ textAlign: "center" }}
                className="input_form"
                value={code}
                type="number"
                placeholder="Введите код"
                onChange={(e) => setCode(e.target.value)}
              />
              <button style={{ marginTop: 20 }} disabled={loading} onSubmit={fetchData} className="button_form">
                {loading ? <Loading color={"#fff"} /> : "Подвердить"}
              </button>
            </form>
            <p onClick={Again} className="re_send">
              Отправить снова
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Activation