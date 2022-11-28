import React from 'react';
import styled from 'styled-components';

const LoginPage = () => {
  return (
    <LoginBox>
      <IdInput placeholder="이메일 입력" />
      <IdInput placeholder="비밀번호 입력" />
      <KakaoLogin>카카오 로그인</KakaoLogin>
    </LoginBox>
  );
};

const LoginBox = styled.div`
  width: 400px;
  height: 400px;
  background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

const IdInput = styled.input`
  width: 200px;
  height: 30px;
`;

const KakaoLogin = styled.button`
  width: 200px;
  height: 40px;
  background-color: yellow;

  &:hover {
    cursor: pointer;
  }
`;

export default LoginPage;
