import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';

const CommentBox = props => {
  const { ARRAY } = props;
  return (
    <CommentBoxBody>
      <CommentBoxTitle>리뷰작성</CommentBoxTitle>
      <CommentStar>
        {ARRAY.map((el, index) => (
          <FaStar key={index} size="20"></FaStar>
        ))}
        <CommentStarText>| 0.0</CommentStarText>
      </CommentStar>
      <CommentInputBody>
        <CommentInput placeholder="내용입력..." rows="3"></CommentInput>
        <SubmitButton>게시하기</SubmitButton>
      </CommentInputBody>
    </CommentBoxBody>
  );
};

export default CommentBox;

const CommentBoxBody = styled.div`
  width: 100%;
  padding-bottom: 20px;
  border-bottom: 1px solid #eceaeb;
`;

const CommentBoxTitle = styled.p`
  margin-top: 20px;
  font-size: 1.1rem;
  font-weight: bold;
`;

const CommentStar = styled.div`
  margin-top: 10px;
  width: 120px;
  ${props => props.theme.variables.flex('row', 'space-between', 'center')};

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

const CommentInputBody = styled.div`
  margin-top: 10px;
  ${props => props.theme.variables.flex('column', 'space-around', '')};
  position: relative;
`;

const CommentInput = styled.textarea`
  outline: none;
  width: 100%;
  height: 100px;
  font-size: 0.9rem;
  font-weight: bold;
  padding: 10px;
  border: none;
  background-color: #f2f3f7;
  border-radius: 20px;
  resize: none;
`;

const SubmitButton = styled.button`
  font-size: 0.9rem;
  font-weight: bold;
  width: 90px;
  border-radius: 20px;
  border: none;
  padding: 5px;
  background-color: #ffd400;
  margin-top: 20px;
  position: absolute;
  bottom: 1px;
  right: 1px;
`;

const CommentStarText = styled.p`
  font-size: 0.8rem;
  font-weight: bold;
  width: 40px;
`;
