import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage from './pages/SignUpPage/SignupPage';
import DetailPage from './pages/DetailPage/DetailPage';
import ReservationPage from './pages/ReservationPage/ReservationPage';
import MyPage from './pages/MyPage/MyPage';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import MainPage from './pages/MainPage/MainPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/reservation" element={<ReservationPage />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
