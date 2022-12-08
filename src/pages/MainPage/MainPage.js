import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import LectureList from './LectureList';
import { format } from 'date-fns';
import { DayPicker, Row, RowProps } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import ko from 'date-fns/locale/ko';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import { useLocation, useSearchParams } from 'react-router-dom';
import Carousel from '../../components/Carousel';
import CarouselComponents from '../../components/Nav/CarouselComponents';

const MainPage = () => {
  const [reservation, setReservation] = useState('');
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [lectures, setLectures] = useState([]);
  const [data, setData] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const url = location.search.split('?')[1];

  const calendarClose = () => {
    setCalendarOpen(!calendarOpen);
  };

  const [priceOpen, setPriceOpen] = useState(false);
  const priceClose = () => {
    setPriceOpen(!priceOpen);
  };
  console.log(lectures);
  // console.log(data);
  // useEffect(() => {
  //   fetch('/data/lectures.json')
  //     .then(response => response.json())
  //     .then(result => setLectures(result));
  // }, []);
  useEffect(() => {
    fetch(`http://10.58.52.211:3000/lectures?${url}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(result => {
        setLectures(result.lectures);
      });
  }, [searchParams]);

  const applyFilter = () => {
    console.log(min);
    console.log(max);
    console.log(date);
    fetch(
      `http://10.58.52.211:3000/lectures?${url}&date=${date}&minPrice=${
        min * 10000
      }&maxPrice=${max * 10000}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then(response => response.json())
      .then(result => {
        setLectures(result.lectures);
      });
  };

  // DayPicker
  const [selected, setSelected] = useState(new Date());
  const [date, setDate] = useState('');
  // console.log(selected);

  // console.log(fullDate);

  const fullDate = () => {
    const fullDate = new Date(
      selected.getTime() - selected.getTimezoneOffset() * 60000
    )
      .toISOString()
      .slice(2, 10)
      .replaceAll('-', '');
    setDate(fullDate);
  };

  // console.log(date);

  useEffect(() => {
    if (selected === undefined) {
      return;
    } else {
      fullDate();
    }
  }, [selected]);

  // const applyCalendar = () => {};

  let footer = '';
  if (selected) {
    footer = (
      <>
        <p className="date">
          날짜를 선택하였습니다. {format(selected, 'yyyy-MM-dd')}.
        </p>
        <div className="ApplyWrap">
          <button className="Apply" onClick={applyFilter}>
            적용하기
          </button>
        </div>
      </>
    );
  }

  const [pricerange, setPriceRange] = useState({
    min: 0,
    max: 10,
  });
  const { min, max } = pricerange;

  console.log(date);
  console.log(min);

  return (
    <MainBody>
      <CarouselComponents />
      <FilterContainer>
        <CalendarBtnWrap>
          <CalendarBtn onClick={calendarClose}>날짜를 선택하세요</CalendarBtn>
        </CalendarBtnWrap>

        <PricebtnWrap>
          <PriceBtn onClick={priceClose}>가격을 선택하세요</PriceBtn>
        </PricebtnWrap>
      </FilterContainer>

      <LectureContainer>
        {lectures.map(lecture => (
          <Wrap key={lecture.lectureId} href={`/lectures/${lecture.lectureId}`}>
            <LectureList key={lecture.lectureId} lecture={lecture} />
          </Wrap>
        ))}

        {calendarOpen && (
          <>
            <style>{`

      .rdp {display: flex; align-items: center; justify-content: center; width: 350px; border: 1px solid #eceaeb; margin: auto; padding: 20px 0px; border-radius: 20px; margin-top: 30px; z-index:30; position:absolute; top:477px; background-color:white;}
      .rdp-day_selected { background-color: #ff9100}
      .rdp-day_selected:hover {background-color: #ff9100}  
      .date {text-align: center; margin-top: 10px; background-color: #eceaeb; padding: 5px 0px; color: black; font-weight: bold; font-size: 1rem; border-radius: 20px;}
      .ApplyWrap {text-align: center; margin-top: 15px;  }
      .Apply {background-color: rgb(245, 212, 0); color: black; border: none;   font-size: 13px;
        padding: 10px 48px; border: none;
        border-radius: 100px; cursor: pointer;}
      `}</style>
            <DayPicker
              mode="single"
              locale={ko}
              selected={selected}
              onSelect={setSelected}
              footer={footer}
              // hidden={isPastDate}
              // components={{ Row: OnlyFutureRow }}
              fromDate={new Date()}
              showOutsideDays
            />
          </>
          // <Calendar
          //   setReservation={setReservation}
          //   lectures={lectures}
          //   setLectures={setLectures}
          //   setData={setData}
          // />
        )}
        {priceOpen && (
          // (
          //   <PriceRange
          //     lectures={lectures}
          //     setLectures={setLectures}
          //     setData={setData}
          //   />
          // )
          <Container>
            <Title>가격 범위</Title>
            <form action="">
              <InputRange
                maxValue={10}
                minValue={0}
                formatLabel={value => `${value}만원`}
                value={pricerange}
                onChange={value => setPriceRange(value)}
              />
            </form>
            <InputContainer>
              <div>
                <InputHeader>최저가격</InputHeader>
                <InputContent>
                  <input type="text" value={`${min}만원`} />
                </InputContent>
              </div>
              <Range>-</Range>
              <div>
                <InputHeader>최고가격</InputHeader>
                <InputContent>
                  <input type="text" value={`${max}만원`} />
                </InputContent>
              </div>
            </InputContainer>
            <ButtonWrap>
              <PriceApplyBtn onClick={applyFilter}>적용하기</PriceApplyBtn>
            </ButtonWrap>
          </Container>
        )}
      </LectureContainer>
    </MainBody>
  );
};

const MainBody = styled.div`
  margin-top: 140px;
`;
// const Carousel = styled.div`
//   margin: 0 auto;
//   overflow: hidden;
//   width: 1107px;
//   height: 300px;
//   border: 1px solid black;
//   margin-bottom: 20px;
// `;
// const CarouselImg = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// `;

const FilterContainer = styled.div`
  justify-content: center;
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const CalendarBtnWrap = styled.div``;
const CalendarBtn = styled.button`
  font-size: 1rem;
  margin-right: 30px;

  padding: 3px 28px;
  cursor: pointer;
  background-color: white;
  border-radius: 4px;
  border: 1px solid rgb(245, 212, 0);
  &:hover {
    background-color: rgb(245, 193, 38);
  }
  &:focus {
    box-shadow: rgb(245, 193, 38) 0px 0px 1px 2px;
  }
  &:active {
    background-color: rgb(184, 138, 3);
    border-color: rgb(184, 138, 3);
  }
`;

const PricebtnWrap = styled.div``;

const PriceBtn = styled.button`
  display: inline-block;
  font-size: 1rem;
  padding: 3px 28px;
  cursor: pointer;
  background-color: white;
  border-radius: 4px;
  border: 1px solid rgb(245, 212, 0);
  &:hover {
    background-color: rgb(245, 193, 38);
  }
  &:focus {
    box-shadow: rgb(245, 193, 38) 0px 0px 1px 2px;
  }
  &:active {
    background-color: rgb(184, 138, 3);
    border-color: rgb(184, 138, 3);
  }
`;

const LectureContainer = styled.div`
  width: 1107px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto auto auto auto;
  background-color: white;
`;
const Container = styled.div`
  right: 200px;
  width: 400px;
  margin-top: 28px;
  padding: 30px;
  background-color: white;
  border: 1px solid rgb(245, 212, 0);
  border-radius: 10px;
  position: absolute;
  top: 477px;
  left: 50%;
  margin-left: -200px;
  z-index: 50;
  .input-range__track--active {
    background-color: rgb(245, 212, 0);
  }
  .input-range__slider {
    background-color: rgb(245, 212, 0);
    border: rgb(245, 212, 0);
  }
  .input-range {
    background-color: white;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 25px;
  margin-bottom: 22px;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 45px;
`;

const InputHeader = styled.span`
  font-size: 12px;
  color: #999;
`;

const InputContent = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #e4e4e4;
  border-radius: 15px;
  font-size: 14px;
  margin-top: 8px;
  input {
    font-size: 14px;
    width: 150px;
    height: 32px;
    border: 0;
    text-align: center;
    outline: none;
    appearance: none;
    display: inline-block;
    background: transparent;
  }
`;

const Range = styled.span`
  padding: 25px 0 0 0;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const PriceApplyBtn = styled.button`
  font-size: 13px;
  padding: 10px 48px;
  background-color: rgb(245, 212, 0);
  color: black;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  border: 0;
`;

const Wrap = styled.a`
  color: black;
`;
export default MainPage;
