import React, { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import variables from '../../styles/variables';
import theme from '../../styles/theme';

const ReservationSuccess = () => {
  const [params, setParams] = useSearchParams();
  const paymentKey = params.get('paymentKey');
  const order = params.get('orderId');
  const amount = params.get('amount');

  // 토스 페이먼츠 서버로 결제 승인을 요청하는 코드
  useEffect(() => {
    let axios = require('axios').default;

    let options = {
      method: 'POST',
      url: 'https://api.tosspayments.com/v1/payments/confirm',
      headers: {
        Authorization:
          'Basic dGVzdF9za183WFpZa0tMNE1yak9uWjdaTVIxODB6SndsRVdSOg==',
        'Content-Type': 'application/json',
      },
      data: {
        paymentKey: paymentKey,
        amount: amount,
        orderId: order,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.error(error);
      });
  });

  // 백엔드 전송
  useEffect(() => {
    let axios = require('axios').default;

    let options = {
      method: 'POST',
      url: 'http://10.58.52.222:3000/checkout',
      headers: {
        Authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImlhdCI6MTY3MDQ2MjY4NywiZXhwIjoxNjcwNjM1NDg3fQ.dCuzuNGsP4Z03NdXIZHmtrH21n4sf2tH_aGz70gxoYE',
        'Content-Type': 'application/json',
      },
      data: {
        paymentKey: paymentKey,
        amount: amount,
        orderId: order,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.error(error);
      });
  });

  return (
    <ReservationSuccessContainer>
      <PaymentSuccessMessage>결제에 성공하였습니다.</PaymentSuccessMessage>
      <Link className="link" to="/lectures">
        홈으로
      </Link>
    </ReservationSuccessContainer>
  );
};

const ReservationSuccessContainer = styled.div`
  ${variables.flex('column', 'center', 'center')};

  .link {
    font-size: larger;
    background-color: ${theme.kmongYellow};
    padding: 1rem 10rem;
    border-radius: 1rem;
    font-weight: 600;
    margin-bottom: 6.5rem;
  }
`;

const PaymentSuccessMessage = styled.div`
  ${variables.flex('row', 'center', 'center')};
  height: 40vh;
  font-size: xx-large;
`;

export default ReservationSuccess;
