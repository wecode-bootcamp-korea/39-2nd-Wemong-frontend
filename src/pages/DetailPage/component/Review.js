import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';
import ReviewComment from './ReviewComment';
import { useEffect, useState } from 'react';
import NoComment from './NoComment';
import CommentBox from './CimmentBox';

const Review = () => {
  const ARRAY = [0, 1, 2, 3, 4];
  const as = 2;
  const [userComment, setUserComment] = useState([]);
  const [stars, setStars] = useState([false, false, false, false, false]);
  const [averageStar, setAverageStar] = useState(3);
  const [commentDropBox, setCommentDropBox] = useState(false);

  useEffect(() => {
    fetch('/data/userInfoData.json')
      .then(res => res.json())
      .then(data => setUserComment(data));
  }, []);

  useEffect(() => {
    Average(as);
  }, []);

  const Average = as => {
    let startAverage = [...stars];
    for (let i = 0; i < 5; i++) {
      startAverage[i] = i <= as ? true : false;
    }
    setStars(startAverage);
  };

  const commentDropEv = () => {
    setCommentDropBox(commentDropBox ? false : true);
  };

  const countComments = userComment.length <= 0 ? true : false;
  return (
    <Revise>
      <ServiceEvaluation>서비스 평가</ServiceEvaluation>
      <ReviewBody>
        <StarsBody>
          {ARRAY.map((el, index) => {
            return (
              <FaStar
                key={index}
                size="20"
                className={stars[el] && 'yellowStar'}
              ></FaStar>
            );
          })}
        </StarsBody>
        <StatsText>{averageStar}.0</StatsText>
        <StatsText>| {userComment.length}개의 평가</StatsText>
      </ReviewBody>
      <StartCommentBody>
        <StatsTextA>
          실제 위몽을 통해 구매한 이용자들이 남긴 평가입니다.
        </StatsTextA>
        <CommentButton onClick={commentDropEv}>
          리뷰작성
          <i
            class={`fa-sharp fa-solid ${
              commentDropBox ? 'fa-minus' : 'fa-caret-down'
            } `}
          ></i>
        </CommentButton>
      </StartCommentBody>
      {commentDropBox ? <CommentBox ARRAY={ARRAY}></CommentBox> : ''}

      <StatsTextB>서비스 후기{userComment.length}개</StatsTextB>
      {countComments ? (
        <NoComment></NoComment>
      ) : (
        userComment.map((data, index) => (
          <ReviewComment key={index} data={data} ARRAY={ARRAY}></ReviewComment>
        ))
      )}
    </Revise>
  );
};

export default Review;

const Revise = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-flow: column nowrap;
  margin-bottom: 100px;
`;

const ReviewBody = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-flow: row nowrap;
  align-items: center;
  margin-top: 30px;
`;

const ServiceEvaluation = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
`;

const StarsBody = styled.div`
  & svg {
    color: #f2f3f7;
    cursor: pointer;
  }

  :hover svg {
    color: #fcc419;
  }

  & svg:hover ~ svg {
    color: #f2f3f7;
  }

  .yellowStar {
    color: #fcc419;
  }
`;

const StatsText = styled.p`
  margin-left: 5px;
  font-size: 1rem;
  font-weight: bold;
`;

const StatsTextA = styled(StatsText)`
  font-size: 0.8rem;
  margin-top: 20px;
  color: #9a9ba7;
  margin-left: 0px;
  padding-bottom: 25px;
`;

const StatsTextB = styled(StatsText)`
  font-size: 0.95rem;
  font-weight: bold;
  margin-top: 40px;
`;

const StartCommentBody = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
`;

const CommentButton = styled.button`
  width: 125px;
  background-color: #ffd400;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  padding: 5px;
  border-radius: 20px;
  cursor: pointer;

  i {
    margin-left: 5px;
  }
`;
