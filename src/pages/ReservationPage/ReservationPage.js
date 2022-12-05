import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
import Calendar from './Calendar';
import variables from '../../styles/variables';
import { loadTossPayments } from '@tosspayments/payment-sdk';

const ReservationPage = () => {
  const [lectureData, setLectureData] = useState([]);
  const [lectureTimeOptionId, setLectureTimeOptionId] = useState(0);
  const [lectureDate, setLectureDate] = useState('');
  const [reservation, setReservation] = useState('');
  // const lectureId = 2;
  const { id } = useParams();

  // 백에서 상품 디테일 데이터 수신
  useEffect(() => {
    fetch(
      `http://10.58.52.222:3000/calander/10
    `,
      {
        method: 'GET',
      }
    )
      // fetch(`/data/reservationData.json`, {
      //   method: 'GET',
      // })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setLectureData(data.data[0]);
        setLectureTimeOptionId(data.data[0].lectureDate[0].lectureTimeOptionId);
        setLectureDate(data.data[0].lectureDate[0].lectureDate);
      });
  }, []);

  // 백에서 받은 데이터 객체 구조 분해 할당
  const { lectureTitle, lecturerName, price, images } = lectureData;

  console.log(lectureDate);
  console.log(lectureTimeOptionId);

  // 토스페이 결제 기능
  const clientKey = `${process.env.REACT_APP_CLIENT_KEY}`;

  const handleKakaoPay = () => {
    loadTossPayments(clientKey).then(tossPayments => {
      tossPayments
        .requestPayment('카드', {
          // 결제 수단
          // 결제 정보
          amount: `${price}`,
          orderId: 'pe8D3rg0T526Ja0Q-bm8R',
          orderName: `${lectureTitle} (lectureTimeOptionId:${lectureTimeOptionId})`,
          customerName: '박토스',
          successUrl: 'http://localhost:3000/reservationsuccess',
          failUrl: 'http://localhost:3000/reservation',
          flowMode: 'DIRECT',
          easyPay: '토스페이',
        })
        .catch(function (error) {
          if (error.code === 'USER_CANCEL') {
            // 결제 고객이 결제창을 닫았을 때 에러 처리
          } else if (error.code === 'INVALID_CARD_COMPANY') {
            // 유효하지 않은 카드 코드에 대한 에러 처리
          }
        });
    });
  };

  // 토스 페이 안될 때 대안
  // const handlePay = () = {
  //   fetch(``, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type':
  //     },
  //     body: '',
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data);
  //     });
  // }

  return (
    <ReservationPageContainer>
      <DateSet>
        <Calendar
          className="calendar"
          setReservation={setReservation}
        ></Calendar>
        <CalendarInfo></CalendarInfo>
      </DateSet>
      <ReservationForm>
        <ClassData>
          <ClassPicture
            width="100"
            src={images}
            alt="클래스_사진"
          ></ClassPicture>
          <Names>
            <ClassName>
              <span className="class-name">{lectureTitle}</span>
            </ClassName>
            <TutorName>
              <span className="tutor-name">{lecturerName}</span>
            </TutorName>
            <ClassPrice>
              <span className="class-price">{price}원</span>
            </ClassPrice>
          </Names>
        </ClassData>
        <PaymentButtonArea>
          <PaymentButton onClick={handleKakaoPay}>
            toss<span className="pay">pay</span> &nbsp;
            <span className="message">결제하기</span>
          </PaymentButton>
        </PaymentButtonArea>
      </ReservationForm>
    </ReservationPageContainer>
  );
};

const ReservationPageContainer = styled.div`
  ${variables.flex('row', 'center', 'center')};
  height: 60vh;
  padding: 390px 0;
`;

const DateSet = styled.div`
  ${variables.flex('row', 'center', 'center')};
  margin-right: 5rem;

  .calendar {
    margin-right: 20rem;
  }
`;

const CalendarInfo = styled.div`
  ${variables.flex('row', 'center', 'center')}
`;

const ReservationForm = styled.div`
  ${variables.flex('column', 'center', 'center')};
  margin-left: 1rem;
`;

const ClassData = styled.div`
  ${variables.flex('', '', '')};
`;

const ClassPicture = styled.img`
  margin: 1rem;
`;

const Names = styled.div`
  ${variables.flex('column', '', '')};
  margin: 1rem;
`;

const ClassName = styled.div`
  margin-bottom: 0.5rem;

  .class-name {
    font-size: larger;
    font-weight: 400;
  }
`;

const TutorName = styled.div`
  margin-top: 0.5rem;
  .tutor-name {
    font-size: larger;
    font-weight: 400;
  }
`;

const ClassPrice = styled.div`
  margin-top: 1rem;
  .class-price {
    font-size: x-large;
    font-weight: 600;
  }
`;

const PaymentButtonArea = styled.div`
  padding: 3rem 1rem;
`;

const PaymentButton = styled.button`
  width: 20rem;
  height: 4rem;
  font-size: 1.5rem;
  background-color: #003ff9;
  color: white;
  border: none;
  border-radius: 0.5rem;

  .pay {
    font-weight: 800;
  }

  .message {
    font-size: 1.2rem;
  }
`;

export default ReservationPage;
