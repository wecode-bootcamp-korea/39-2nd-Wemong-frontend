import React, { useState, useRef, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import TutorInformation from './component/TutorInformation';
import DitailLecture from './component/DitailLecture';
import Calendar from './component/Calendar';
import Review from './component/Review';

const DetailPage = () => {
  const [buttonClick, setButtonClick] = useState('PREMIUM');
  const categoryRef = useRef(null);
  const [sclloEv, setSclloEv] = useState('');
  const [reservation, setReservation] = useState('날짜를 선택해주세요.');
  const [day, setDay] = useState();
  const [data, setData] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch(`http://10.58.52.222:3000/lectures/${params.id}`)
      .then(res => res.json())
      .then(data => {
        setData(data.data[0]);
      });
  }, []);

  const {
    lectureText,
    lectureTitle,
    price,
    lecturerName,
    mainCategory,
    subcategory,
    images,
    review,
    AVGrating,
  } = data;

  const myPrice = price;

  useEffect(() => {
    if (sclloEv === 'Information') {
      window.scrollTo({ top: 580, left: 0, behavior: 'smooth' });
    } else if (sclloEv === 'Rule') {
      categoryRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    } else if (sclloEv === 'Evaluation') {
      window.scrollTo({ top: 2300, left: 0, behavior: 'smooth' });
    }
  }, [sclloEv]);

  const buttonColor = reservation === '예약하기' ? '#ffd400' : '#F2F3F7';

  const sclloClick = e => {
    setSclloEv(e.target.title);
  };

  const click = e => {
    setButtonClick(e.target.title);
  };

  const categoryEnum = Object.freeze({
    1: '요리',
    2: '입시',
    3: 'IT',
  });

  const SubCategory = Object.freeze({
    1: '한식',
    2: '중식',
    3: '양식',
    4: '국어',
    5: '영어',
    6: '수학',
    7: 'mos',
    8: '코딩',
    9: '영상편집',
  });

  return (
    <DetailPageBody>
      <DetailBody>
        <DetailImgBody>
          <DetailCatgory>
            {categoryEnum[mainCategory]}/{SubCategory[subcategory]}
          </DetailCatgory>
          <DitailImg src={images}></DitailImg>
          <DitailCategory>
            <Category
              onClick={sclloClick}
              title="Information"
              check={sclloEv === 'Information'}
            >
              서비스 설명
            </Category>
            <Category
              onClick={sclloClick}
              title="Rule"
              check={sclloEv === 'Rule'}
            >
              가격 정보
            </Category>
            <Category
              onClick={sclloClick}
              title="Evaluation"
              check={sclloEv === 'Evaluation'}
            >
              서비스 평가
            </Category>
          </DitailCategory>
          <DitailLecture
            categoryRef={categoryRef}
            price={price}
          ></DitailLecture>
          <Review
            review={review}
            data={data}
            AVGrating={AVGrating}
            params={params}
          ></Review>
        </DetailImgBody>
      </DetailBody>
      <DetailContents>
        <Icons>
          <i class="fa-solid fa-share-nodes"></i>
          <i class="fa-regular fa-heart "></i>
        </Icons>
        <Title>{lectureTitle}</Title>
        <MenuBody>
          <Rating
            title="STANDARD"
            check={buttonClick === 'STANDARD'}
            onClick={click}
          >
            STANDARD
          </Rating>
          <Rating
            title="DELUXE"
            check={buttonClick === 'DELUXE'}
            onClick={click}
          >
            DELUXE
          </Rating>
          <Rating
            title="PREMIUM"
            check={buttonClick === 'PREMIUM'}
            onClick={click}
          >
            PREMIUM
          </Rating>
        </MenuBody>
        <Contents>
          <Price>{myPrice}</Price>
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
          <Explanation>{lectureTitle}</Explanation>
          <Explanations>{lectureText}</Explanations>
          <Checklist>
            수면제제공 <i class="fa-solid fa-check"></i>
          </Checklist>
          <Checklist>
            잠옷제공 <i class="fa-solid fa-check"></i>
          </Checklist>
          <Checklist>
            이불제공 <i class="fa-solid fa-check"></i>
          </Checklist>
          <Checklist>
            침대제공 <i class="fa-solid fa-check"></i>
          </Checklist>
          <Checklist>
            전기장판제공 <i class="fa-solid fa-check"></i>
          </Checklist>
          <DetailCheck>
            진행일<TowDetailCheck>1일</TowDetailCheck>
          </DetailCheck>
          <DetailCheck>
            예약가능일수<TowDetailCheck>1일</TowDetailCheck>
          </DetailCheck>
          <Calendar
            setReservation={setReservation}
            setDay={setDay}
            params={params}
          ></Calendar>
          <Link to={'/reservation'}>
            <BigButton buttonColor={buttonColor}>{reservation}</BigButton>
          </Link>
        </Contents>
        <Payment>
          <i class="fa-solid fa-shield-halved fa-2x"></i>
          <PaymentP>
            예약이 완료된 이후에 전문가에게 결제대금이 전달됩니다.
          </PaymentP>
        </Payment>
        <TutorInformation lecturerName={lecturerName}></TutorInformation>
      </DetailContents>
    </DetailPageBody>
  );
};

const DetailPageBody = styled.div`
  width: 100%;
  ${props => props.theme.variables.flex('row', 'center', 'flex-start')};
  margin-top: 123px;
`;

const DetailBody = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

const DetailImgBody = styled.div`
  ${props => props.theme.variables.flex('column', '', '')};
`;

const DetailCatgory = styled.p`
  font-size: 1rem;
  color: #555969;
  font-weight: 600;
  margin-bottom: 16px;
  margin-top: 16px;
`;

const DitailImg = styled.img`
  width: 650px;
  height: 485px;
  object-fit: cover;
`;

const DitailCategory = styled.div`
  width: 650px;
  ${props => props.theme.variables.flex('', 'space-between', 'center')};
  margin-top: 30px;
  position: sticky;
  top: 123px;
  background-color: #fff;
`;

const Category = styled.div`
  text-align: center;
  border: ${props => (props.check ? '1px solid black' : '1px solid #eceaeb')};
  font-weight: ${props => (props.check ? '600' : '500')};
  font-size: 1.2rem;
  width: 215px;
  height: 50px;
  padding: 14px;
  background-color: white;
  cursor: pointer;
`;

const DetailContents = styled.div`
  width: 470px;
  margin-left: 60px;
  margin-top: 50px;
`;

const Icons = styled.div`
  ${props => props.theme.variables.flex('', 'space-between', '')};
  width: 100%;
  justify-content: space-between;
`;

const Title = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const MenuBody = styled.div`
  width: 100%;
  border-top: 1px solid #eceaeb;
  border-left: 1px solid #eceaeb;
  border-right: 1px solid #eceaeb;
  ${props => props.theme.variables.flex('row', 'space-around', '')};
`;

const Rating = styled.p`
  font-size: 1.1rem;
  width: 155px;
  height: 45px;
  ${props => props.theme.variables.flex('', 'center', 'center')};
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
  color: ${props => (props.check ? 'black' : '#9A9BA7')};
  border-bottom: ${props =>
    props.check ? '5px solid #F5C126' : '1px solid #ECEAEB'};
`;

const Contents = styled.div`
  width: 100%;
  padding: 24px 24px 0px;
  border-left: 1px solid #eceaeb;
  border-right: 1px solid #eceaeb;
  border-bottom: 1px solid #eceaeb;
`;

const Price = styled.p`
  font-size: 1.25rem;
  font-weight: 600;
`;

const SinupCoupon = styled.div`
  width: 100%;
  background-color: #fafafc;
  margin: 16px 0px;
  padding: 16px;
  ${props => props.theme.variables.flex('', 'space-between', '')};

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
  ${props => props.theme.variables.flex('', 'center', 'center')};
  font-size: 0.9rem;
  font-weight: 600;
  padding: 8px;
`;

const Explanation = styled.p`
  font-size: 0.9rem;
  font-weight: 600;
`;

const Explanations = styled(Explanation)`
  font-weight: 500;
  margin-top: 7px;
  margin-bottom: 20px;
`;

const Checklist = styled.div`
  width: 100%;
  ${props => props.theme.variables.flex('', 'space-between', '')};
  margin-top: 7px;
  font-size: 0.93rem;
  font-weight: 500;

  i {
    color: #f5c126;
  }
`;

const DetailCheck = styled(Checklist)`
  font-size: 0.93rem;
`;

const TowDetailCheck = styled.span`
  font-size: 0.93rem;
`;

const BigButton = styled.button`
  width: 100%;
  height: 52px;
  background-color: ${props => props.buttonColor};
  margin-top: 25px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  border: none;
  margin-bottom: 30px;
  cursor: pointer;
`;

const Payment = styled.div`
  width: 100%;
  padding: 24px;
  border: 1px solid #eceaeb;
  margin-top: 20px;
  ${props => props.theme.variables.flex('row', '', '')};

  i {
    margin-right: 20px;
    color: #e4e5ed;
  }
`;

const PaymentP = styled.p`
  font-size: 0.95rem;
`;

export default DetailPage;
