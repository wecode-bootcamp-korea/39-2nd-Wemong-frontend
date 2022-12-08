import React from 'react';
import styled from 'styled-components';

const LectureList = props => {
  const { lecture } = props;
  const {
    lectureId,
    lectureTitle,
    lecturerName,
    categoryId,
    subCategoryId,
    price,
    images,
  } = lecture;
  return (
    <Container>
      <LectureImgWrap>
        <LectureImg src={images[0]}></LectureImg>
      </LectureImgWrap>
      <LectureInfo>
        <LectureTitle>{lectureTitle}</LectureTitle>
        <LectureCategory>{Category[categoryId]}</LectureCategory>
        <LectureTeacher>{lecturerName}</LectureTeacher>
        <LecturePrice>{price} 원</LecturePrice>
      </LectureInfo>
    </Container>
  );
};

const Container = styled.div`
  display: inline-block;

  word-break: break-word;
  margin-bottom: 30px;
  width: 230px;

  margin-left: 62px;
  padding-bottom: 10px;
  cursor: pointer;
  &:nth-child(4n + 1) {
    margin-left: 0;
  }
  &:nth-child(4n) {
    margin-left: 63px;
  }
`;

const LectureImgWrap = styled.div`
  overflow: hidden;
`;

const LectureImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  &:hover {
    transform: scale(1.1);
    opacity: 0.8;
  }
`;

const LectureInfo = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

const LectureTitle = styled.div`
  font-weight: 700;
  padding: 0 20px;
  padding-bottom: 30px;
  line-height: 1.3;
  font-size: 1.1rem;
`;

const LectureCategory = styled.div`
  padding: 0 20px;
  padding-bottom: 8px;
`;

const LectureTeacher = styled.div`
  padding: 0 20px;
  padding-bottom: 8px;
`;

const LecturePrice = styled.div`
  padding: 0 20px;

  font-weight: 600;
`;

export default LectureList;

const SubCategory = {
  1: '한식',
  2: '중식',
  3: '양식',
  4: '국어',
  5: '영어',
  6: '수학',
  7: 'mos',
  8: '코딩',
  9: '영상편집',
};
const Category = {
  1: '요리',
  2: '입시',
  3: 'IT',
};
