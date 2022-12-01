import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import variables from '../../styles/variables';

const OrderListPage = () => {
  const [userInfo, setUserInfo] = useState();
  const [reservationInfo, setReservationInfo] = useState();
  const OrderList = ['', '', '', '', ''];

  useEffect(() => {});

  const { name, email, point } = userInfo;

  return (
    <OrderListPageContainer>
      <UserDatas>
        <UserName>
          <span className="user-name">이름{name}</span>
        </UserName>
        <UserEmail>
          <span className="user-email">이메일{email}</span>
        </UserEmail>
        <UserPoint>
          <span className="user-point">보유 포인트{point}</span>
        </UserPoint>
      </UserDatas>
      <ReservationListTitle>
        <span className="reservation-list-title">예약 내역</span>
      </ReservationListTitle>
      {OrderList.map((item, index) => (
        <ReservationDetail key={index}>
          <ClassPicture alt="클래스_사진" />
          <Names>
            <ClassName>
              <ClassNameText>상품명</ClassNameText>
            </ClassName>
            <TutorName>
              <TutorNameText>강사 이름</TutorNameText>
            </TutorName>
            <ClassDate>
              <ClassDateText>예약 날짜</ClassDateText>
            </ClassDate>
            <ClassPrice>
              <ClassPriceText>가격</ClassPriceText>
            </ClassPrice>
          </Names>
        </ReservationDetail>
      ))}
    </OrderListPageContainer>
  );
};

const OrderListPageContainer = styled.div`
  padding-bottom: 10vh;
`;

const UserDatas = styled.div`
  ${variables.flex('', 'center', '')};
  margin: 2rem 0rem 3.5rem 0rem;
`;

const UserName = styled.div`
  width: 15vw;
  .user-name {
    font-size: large;
  }
`;

const UserEmail = styled.div`
  width: 30vw;
  .user-email {
    font-size: large;
  }
`;

const UserPoint = styled.div`
  width: 15vw;
  .user-point {
    font-size: large;
  }
`;

const ReservationListTitle = styled.div`
  ${variables.flex('', 'center', 'center')};
  margin: 6rem 6rem 4rem 6rem;

  .reservation-list-title {
    font-size: x-large;
  }
`;

const ReservationDetail = styled.div`
  ${variables.flex('', 'center', 'center')};
  border-radius: 1rem;
  border: 1px solid grey;
  padding: 0.5rem 1rem;
  margin: 1.5rem 7rem;
`;

const ClassPicture = styled.img`
  margin: 1rem 2rem 1rem 0rem;
`;

const Names = styled.div`
  ${variables.flex('column', '', '')};
  margin: 1rem;
  width: 50vw;
`;

const NamesStyle = styled.div`
  margin-top: 1rem;
`;

const ClassName = styled.div`
  margin: 0.5rem 0rem;
`;

const ClassNameText = styled.span`
  font-size: larger;
  font-weight: 400;
`;

const TutorName = styled(NamesStyle)``;

const TutorNameText = styled.span`
  font-size: medium;
  font-weight: 400;
`;

const ClassDate = styled(NamesStyle)``;

const ClassDateText = styled.span`
  font-size: medium;
  font-weight: 400;
`;

const ClassPrice = styled(NamesStyle)``;

const ClassPriceText = styled.span`
  font-size: large;
  font-weight: 400;
`;

export default OrderListPage;
