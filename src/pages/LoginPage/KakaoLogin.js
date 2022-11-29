import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { SERVER_API } from './Kakao';

const KakaoLogin = () => {
  const location = useLocation();
  const CODE = location.search.split('=')[1];
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${SERVER_API}`, {
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
        console.log(data);
        localStorage.setItem('token', data.token);
        navigate('/');
      });
  });
  return console.log(CODE);
};

export default KakaoLogin;
