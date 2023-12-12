import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import About from './pages/About/About';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Footer from './components/Footer/Footer';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import Activation from './pages/Activation/Activation';
import { useEffect, useState } from 'react';
import InfoPage from './pages/InfoPage/InfoPage';
import Ticket from './pages/Ticket/Ticket';
import Booking from './pages/Booking/Booking';
import Profile from './pages/Profile/Profile';
import DetailTicket from './pages/DetailTicket/DetailTicket';

function App() {
  const [loginModal, setLoginModal] = useState(false)
  const [registerModal, setRegisterModal] = useState(false)
  const [local, setLocal] = useState()
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token")
    console.log(token);
    setLocal(token)
  }, [location])

  useEffect(() => {
    handleScroll();
  }, [location]);

  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="App">
      <Header local={local} />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='contact' element={<Contact />} />
        <Route path='ticket' element={<Ticket />} />
        <Route path='about' element={<About />} />
        <Route path='about/:partner' element={<About />} />
        <Route path='login' element={<Login setLoginModal={setLoginModal} />} />
        <Route path='register' element={<Register />} />
        <Route path='activation' element={<Activation setLoginModal={setLoginModal} setRegisterModal={setRegisterModal} />} />
        <Route path='activation/:verify' element={<Activation setLoginModal={setLoginModal} setRegisterModal={setRegisterModal} />} />
        <Route path='forgot-password' element={<ForgotPassword />} />
        <Route path='info-page/:info' element={<InfoPage />} />
        <Route path='booking' element={<Booking />} />
        <Route path='about' element={<About />} />
        <Route path='dashboard' element={
          <Profile
            loginModal={loginModal}
            setLoginModal={setLoginModal}
            registerModal={registerModal}
            setRegisterModal={setRegisterModal}
          />} />
        <Route path='detail-ticket/:ticket' element={<DetailTicket />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
