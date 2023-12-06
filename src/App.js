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

function App() {
  const [local, setLocal] = useState()
  const location = useLocation();

  console.log(local);

  useEffect(() => {
    const token = localStorage.getItem("token")
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
        <Route path='about' element={<About />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='activation' element={<Activation />} />
        <Route path='activation/:verify' element={<Activation />} />
        <Route path='forgot-password' element={<ForgotPassword />} />
        <Route path='info-page/:info' element={<InfoPage />} />
        <Route path='dashboard' element={<div></div>} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
