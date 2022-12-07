import styled from 'styled-components';
import { Link } from 'react-router-dom';

const DitailLecture = props => {
  return (
    <DitailLectureBody>
      <LecturenImg src="/images/입시 상담.png"></LecturenImg>
      <LecturePriceBody ref={props.categoryRef}>
        <PriceText>가격정보</PriceText>
        <PriceBody>
          <Price>70,000원</Price>
          <SinupCoupon>
            <Text>
              지금 회원가입하면 <SText>10만원</SText> 쿠폰팩을 드려요!
            </Text>
            <Link to={'/login'}>
              <Coupon>
                쿠폰받기<i class="fa-solid fa-download"></i>
              </Coupon>
            </Link>
          </SinupCoupon>
          <ConsultingBody>
            <ConsultingTitle>1:1 전화상담 코칭</ConsultingTitle>
            <ConsultingText>-1회 60분 온라인 코칭 진행</ConsultingText>
            <ConsultingText>-전화 또는 구글미트로 진행</ConsultingText>
          </ConsultingBody>
        </PriceBody>
      </LecturePriceBody>
      <ButtonBody>
        <Link to={'/reservation'}>
          <PaymentButton>구매</PaymentButton>
        </Link>
      </ButtonBody>
      <RefundBody>
        <RefundImg src="/images/환불규정.png" title="Rule"></RefundImg>
      </RefundBody>
    </DitailLectureBody>
  );
};

export default DitailLecture;

const DitailLectureBody = styled.div`
  width: 100%;
  margin-bottom: 45px;
`;

const LecturenImg = styled.img`
  width: 650px;
`;

const LecturePriceBody = styled.div`
  border-top: 1px solid #eceaeb;

  margin-top: 40px;
`;

const PriceText = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const PriceBody = styled.div`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  padding: 24px 24px;
  height: 240px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
`;

const Price = styled.p`
  font-size: 1.4rem;
  font-weight: 600;
`;

const SinupCoupon = styled.div`
  width: 100%;
  background-color: #fafafc;
  margin: 16px 0px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
`;

const Text = styled.p`
  font-size: 0.9rem;
  width: 171px;
  line-height: 15px;
`;

const SText = styled.span`
  color: #2174d7;
  font-size: 0.9rem;
  font-weight: 600;
`;

const Coupon = styled.div`
  background-color: #ebf4ff;
  color: #2174d7;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 8px;
`;

const ConsultingBody = styled.div``;

const ConsultingTitle = styled.p`
  font-weight: 600;
  margin-bottom: 5px;
`;

const ConsultingText = styled(ConsultingTitle)`
  font-weight: 500;
`;

const ButtonBody = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  border-bottom: solid 1px #eceaeb;
`;

const PaymentButton = styled.button`
  width: 190px;
  height: 52px;
  background-color: #ffd400;
  border-radius: 8px;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  margin-top: 40px;
  margin-bottom: 40px;
  cursor: pointer;
`;

const RefundBody = styled.div`
  border-bottom: 1px solid #eceaeb;
`;

const RefundImg = styled.img`
  margin-top: 40px;
  margin-bottom: 40px;
`;
