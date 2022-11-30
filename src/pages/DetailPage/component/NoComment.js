import styled from 'styled-components';

const NoComment = () => {
  return (
    <NoBody>
      <NoImg src="https://item.kakaocdn.net/do/a7fd7c0630f8aea8419a565fb2773bbc9f5287469802eca457586a25a096fd31"></NoImg>
      <NoText>작성된 리뷰가 없습니다.</NoText>
    </NoBody>
  );
};

export default NoComment;

const NoBody = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  margin: auto;
  margin-top: 30px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eceaeb;
  width: 100%;
`;

const NoImg = styled.img`
  width: 150px;
`;

const NoText = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
`;
