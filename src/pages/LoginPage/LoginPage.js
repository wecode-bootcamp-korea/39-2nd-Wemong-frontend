import React, { useEffect } from 'react';
import styled from 'styled-components';
import variables from '../../styles/variables';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { KAKAO_AUTH_URL, SERVER_API } from './Kakao';

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
        localStorage.setItem('token', data.token.accessToken);
        navigate('/');
      });
  });

  //백엔드에 인가코드 전달

  //프론트에서 토큰받아서 백에 전달'
  // const KakaoToken = () => {
  //   fetch('kauth.kakao.com/oauth/token', {
  //     method: 'POST',
  //     headers: {
  //       'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
  //     },
  //     body: `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${CODE}`,
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       if (data.access_token) {
  //         localStorage.setItem('token', data.data.access_token);
  //       } else {
  //         navigate('/');
  //       }
  //     });
  // };

  // useEffect(() => {
  //   if (!location.search()) return null;
  //   KakaoToken();
  // }, []);

  return (
    <LoginBox>
      <Link to="/">
        <Logo>WeMong</Logo>
      </Link>
      <KakaoLoginBtn
        alt="kakaologinimg"
        src="images/kakaologin.png"
        onClick={() => (window.location.href = KAKAO_AUTH_URL)}
      />
    </LoginBox>
  );
};

const Logo = styled.div`
  font-size: 2.5rem;
  font-weight: 900;
  padding-bottom: 10px;
  color: black;
`;

const LoginBox = styled.div`
  width: 400px;
  height: 400px;
  ${variables.flex}
  flex-direction: column;
  gap: 20px;
  ${variables.absoluteCenter}
`;

const KakaoLoginBtn = styled.img`
  height: 45px;
`;

export default KakaoLogin;
