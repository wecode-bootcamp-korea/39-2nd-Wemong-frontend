import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';
import { useState, useEffect } from 'react';
const ReviewComment = props => {
  const { data, ARRAY } = props;
  const [score, setScore] = useState([false, false, false, false, false]);

  useEffect(() => {
    starScore(data.score - 1);
  }, []);

  const starScore = index => {
    let star = [...score];
    for (let i = 0; i < 5; i++) {
      star[i] = i <= index ? true : false;
    }
    setScore(star);
  };

  return (
    <CommentBody>
      <UserProfile>
        <UserImg src={data.images}></UserImg>
        <UserInfo>
          <UserName>{data.userName}</UserName>
          <UserStarts>
            {ARRAY.map((el, index) => (
              <FaStar
                key={index}
                size="14"
                className={score[el] && 'yellowStar'}
              ></FaStar>
            ))}{' '}
            {data.score}.0
          </UserStarts>
        </UserInfo>
      </UserProfile>
      <UserComment>{data.userComment}</UserComment>
    </CommentBody>
  );
};

export default ReviewComment;

const CommentBody = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin-top: 40px;
`;

const UserProfile = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`;

const UserImg = styled.img`
  width: 32px;
  border-radius: 50%;
`;

const UserInfo = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  margin-left: 10px;
`;

const UserName = styled.p`
  font-size: 0.8rem;
  font-weight: 600;
`;

const UserStarts = styled.div`
  font-size: 0.8rem;
  font-weight: bold;
  & svg {
    color: #f2f3f7;
    cursor: pointer;
  }

  .yellowStar {
    color: #fcc419;
  }
`;

const UserComment = styled.p`
  font-size: 0.8rem;
  font-weight: bold;
  margin-top: 20px;
  padding-bottom: 30px;
  border-bottom: 1px solid #e4e5ed;
  color: #605969;
`;
