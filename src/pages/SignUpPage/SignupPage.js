import React from 'react';
import styled from 'styled-components';
import variables from '../../styles/variables';

const SignUpPage = () => {
  return (
    <SignupBox>
      <Logo>WeMong</Logo>
      <IdInput placeholder="이름" />
      <GenderBox>
        <Gender type="checkbox" />
        남성
        <Gender type="checkbox" />
        여성
      </GenderBox>
      <IdInput placeholder="이메일" />
      <IdInput placeholder="비밀번호 입력" />
      <Signup>회원가입</Signup>
    </SignupBox>
  );
};

const Logo = styled.div`
  font-size: 2.5rem;
  font-weight: 900;
  padding-bottom: 10px;
`;

const GenderBox = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Signup = styled.button`
  width: 300px;
  height: 50px;
  background-color: #ffd400;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 900;
`;

const SignupBox = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  ${variables.absoluteCenter}
`;

const Gender = styled.input`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin: 0 5px;
  background-color: #fff;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 34px;
  text-align: center;
  cursor: pointer;

  .label:hover {
    border-bottom: 1px solid #111;
  }
`;

const IdInput = styled.input`
  width: 300px;
  height: 50px;
  border: 1px solid #e4e5ed;
  border-radius: 5px;
  font-size: 1rem;
`;

export default SignUpPage;
