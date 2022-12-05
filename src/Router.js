import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import LoginPage from './pages/LoginPage/LoginPage';
import DetailPage from './pages/DetailPage/DetailPage';
import ReservationPage from './pages/ReservationPage/ReservationPage';
import ReservationSuccess from './pages/ReservationPage/ReservationSuccess';
import MyPage from './pages/MyPage/MyPage';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import KakaoLogin from './pages/LoginPage/KakaoLogin';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/lectures" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/lectures/:id" element={<DetailPage />} />
        <Route path="/reservation" element={<ReservationPage />} />
        <Route path="/reservationsuccess" element={<ReservationSuccess />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/KakaoLogin" element={<KakaoLogin />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
