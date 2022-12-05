import React, { useState } from 'react';
import Calendar from './Calendar';
import styled from 'styled-components';
import CustomizedSlider from './Price';

const MainPage = () => {
  const [reservation, setReservation] = useState('');
  const [calendarOpen, setCalendarOpen] = useState(false);
  const calendarClose = () => {
    setCalendarOpen(!calendarOpen);
  };

  const [priceOpen, setPriceOpen] = useState(false);
  const priceClose = () => {
    setPriceOpen(!priceOpen);
  };
  return (
    <>
      <Carousel>
        <CarouselImg></CarouselImg>
      </Carousel>
      <FilterContainer>
        <CalendarBtnWrap>
          <CalendarBtn onClick={calendarClose}>날짜를 선택하세요</CalendarBtn>
        </CalendarBtnWrap>
        {calendarOpen && <Calendar setReservation={setReservation} />}
        <PricebtnWrap>
          <PriceBtn onClick={priceClose}>가격을 선택하세요</PriceBtn>
        </PricebtnWrap>
        {priceOpen && <CustomizedSlider />}
      </FilterContainer>
    </>
  );
};

const Carousel = styled.div`
  margin: 0 auto;
  overflow: hidden;
  width: 1107px;
  height: 300px;
  border: 1px solid black;
  margin-bottom: 20px;
`;
const CarouselImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const FilterContainer = styled.div`
  width: 1107px;
  margin: 0 auto;
  border: 1px solid black;
`;

const CalendarBtnWrap = styled.div``;
const CalendarBtn = styled.button``;

const PricebtnWrap = styled.div``;

const PriceBtn = styled.button``;
export default MainPage;
