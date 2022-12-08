import { Link } from 'react-router-dom';
import styled from 'styled-components';

const TutorInformation = props => {
  const { lecturerName } = props;
  return (
    <TutorBody>
      <TutorName>
        <MasterTag>Master</MasterTag>
        <TutorNameText>{lecturerName}</TutorNameText>
      </TutorName>
      <TutorImg src="https://post-phinf.pstatic.net/MjAyMDEyMTdfMTAz/MDAxNjA4MTk2MTcyMzI1.oxAf159E8aW1OPtVghVgO5jM1B5V5uDLwGli_zdRl9Ag.67-N7Cx5aa1-85FReTd1Eu-F32_Prmox7Ihq7_cKkv8g.JPEG/cute-cats-sleeping-01-2.jpg?type=w1200"></TutorImg>
      <TutorTime>
        <Time>
          <i class="fa-regular fa-clock"></i>연락 가능 시간:25시 ~ 25시
        </Time>
        <Time>
          <i class="fa-regular fa-envelope"></i>평균 응답 시간:30분 이내
        </Time>
      </TutorTime>
      <TutorWork>
        <Work>
          <Number>2200건</Number>
          <Text>총작업개수</Text>
        </Work>
        <Work>
          <Number>100%</Number>
          <Text>만족도</Text>
        </Work>
        <WorkE>
          <Number>기업회원</Number>
          <Text>회원구분</Text>
        </WorkE>
      </TutorWork>
      <Link to={'/LoginPage'}>
        <BigButton>로그인후 문의가능</BigButton>
      </Link>
      <TutorIntroduce>
        <IntroduceTitle>소개</IntroduceTitle>
        <IntroduceText>
          잠자기 대회 488회 우승 국내 잠옷 제작 경력 최다 디자이너가 직접 진행
          상담은 무료입니다.
        </IntroduceText>
      </TutorIntroduce>
    </TutorBody>
  );
};

export default TutorInformation;

const TutorBody = styled.div`
  margin-top: 20px;
  border: 1px solid #eceaeb;
  position: relative;
  height: 470px;
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  justify-content: space-between;
`;

const TutorName = styled.div`
  width: 100%;
  height: 71px;
  padding: 12px 24px;
  background-color: #f2f3f7;
`;

const MasterTag = styled.p`
  width: 50px;
  border-radius: 3px;
  font-size: 0.8rem;
  padding: 3px;
  background-color: #c5d7f0;
  color: #3e85db;
  font-weight: 600;
  margin-bottom: 5px;
`;

const TutorNameText = styled.p`
  font-weight: 600;
  font-size: 1.1rem;
`;

const TutorImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  position: absolute;
  top: 31px;
  right: 20px;
`;

const TutorTime = styled.div`
  padding: 0px 24px;
`;

const Time = styled.p`
  margin-bottom: 10px;
  font-size: 1rem;

  i {
    margin-right: 5px;
  }
`;

const TutorWork = styled.div`
  padding: 24px 0px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
`;

const Work = styled.div`
  width: 140px;
  text-align: center;
  border-right: solid 1px gray;
`;

const WorkE = styled(Work)`
  border: none;
`;

const Number = styled.p`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 5px;
`;

const Text = styled.p`
  font-size: 0.8rem;
`;

const BigButton = styled.button`
  width: 420px;
  background-color: #eceaeb;
  height: 52px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  border: none;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background-color: #ffd400;
    transition: 0.3s;
  }
`;

const TutorIntroduce = styled.div`
  padding: 0px 24px;
`;

const IntroduceTitle = styled.p`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 15px;
`;

const IntroduceText = styled.p`
  font-size: 0.9rem;
  width: 100%;
  margin-bottom: 25px;
`;
