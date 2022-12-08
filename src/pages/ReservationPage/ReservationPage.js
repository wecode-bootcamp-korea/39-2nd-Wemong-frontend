import React, { useState } from 'react';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import variables from '../../styles/variables';

const ReservationPage = ({ location }) => {
  const [date, setDate] = useState(new Date());

  return (
    <ReservationPageContainer>
      <DateSet>
        <Calendar
          className="calendar"
          onChange={setDate}
          date={date}
        ></Calendar>
      </DateSet>
      <ReservationForm>
        <ClassData>
          <ClassPicture alt="클래스_사진"></ClassPicture>
          <Names>
            <ClassName>
              <span className="class-name">상품명</span>
            </ClassName>
            <TutorName>
              <span className="tutor-name">강사 이름</span>
            </TutorName>
          </Names>
        </ClassData>
        <PaymentButtonArea>
          <PaymentButton>
            kakao<span className="pay">pay</span> &nbsp;
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
`;

const DateSet = styled.div`
  ${variables.flex('row', 'center', 'center')};
  margin-right: 5rem;

  .calendar {
    width: 20rem;
  }
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

const PaymentButtonArea = styled.div`
  padding: 3rem 1rem;
`;

const PaymentButton = styled.button`
  width: 20rem;
  height: 4rem;
  font-size: 1.5rem;
  background-color: #ffdf00;
  color: #1e1e1e;
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
