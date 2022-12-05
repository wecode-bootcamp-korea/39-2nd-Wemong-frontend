import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { SERVER_API } from './Kakao';

const KakaoLogin = () => {
  const location = useLocation();
  const CODE = location.search.split('=')[1];
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://10.58.52.222:3000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        authorization_code: `${CODE}`,
      }),
    })
      .then(response => response.json())
      .then(data => {
        localStorage.setItem('token', data.token);
        navigate('/lectures');
      });
  });
};

export default KakaoLogin;
