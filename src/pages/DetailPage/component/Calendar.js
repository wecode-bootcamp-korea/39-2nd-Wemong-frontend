import React, { useEffect } from 'react';
import { format } from 'date-fns';
import { DayPicker, Row, RowProps } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import ko from 'date-fns/locale/ko';

// function getAllDaysInMonth(year, month) {
//   const date = new Date(year, month, 1);
//   const dates = [];
//   while (date.getMonth() === month) {
//     dates.push(new Date(date).toISOString().slice(0, 10).replaceAll('-', ','));
//     date.setDate(date.getDate() + 1);
//   }
//   return dates;
// }
// const date = new Date('2022-12-01');
// const december = getAllDaysInMonth(date.getFullYear(), date.getMonth());
// const fromBack = dayData.map(obj => obj.lectureDate);

// const unavailableDates = december
//   .filter(day => !fromBack.includes(day))
//   .map(day => new Date(day));

// const disableDay = unavailableDates;

export default function Calendar(props) {
  const { params } = props;
  const [selected, setSelected] = React.useState('');
  const [dayData, setDayData] = React.useState([]);
  useEffect(() => {
    fetch(`http://10.58.52.222:3000/calander/${params.id}`)
      .then(res => res.json())
      .then(data => {
        setDayData(data.data[0].lectureDate);
      });
  }, []);

  function getAllDaysInMonth(year, month) {
    const date = new Date(year, month, 1);
    const dates = [];
    while (date.getMonth() === month) {
      dates.push(
        new Date(date).toISOString().slice(0, 10).replaceAll('-', ',')
      );
      date.setDate(date.getDate() + 1);
    }
    return dates;
  }
  const date = new Date('2022-12-01');
  const december = getAllDaysInMonth(date.getFullYear(), date.getMonth());
  const fromBack = dayData.map(obj => obj.lectureDate);

  const unavailableDates = december
    .filter(day => !fromBack.includes(day))
    .map(day => new Date(day));

  const disableDay = unavailableDates;

  let footer = <p></p>;
  if (selected) {
    props.setReservation('예약하기');

    footer = (
      <p className="date">
        날짜를 선택하였습니다. {format(selected, 'yyyy-MM-dd')}.
      </p>
    );
  }
  if (!selected) {
    props.setReservation('날짜를 선택해주세요.');
    props.setDay('');
  }
  useEffect(() => {
    localStorage.setItem('date', selected);
  }, [selected]);

  return (
    <>
      <style>{`
      .rdp {display: flex; align-items: center; justify-content: center; width: 100%; border: 1px solid #eceaeb; margin: auto; padding: 20px 0px; border-radius: 20px; margin-top: 30px;}
      .rdp-day_selected { background-color: #ff9100}
      .rdp-day_selected:hover {background-color: #ff9100}  
      .date {text-align: center; margin-top: 10px; background-color: #eceaeb; padding: 5px 0px; color: black; font-weight: bold; font-size: 1rem; border-radius: 20px;}
      `}</style>
      <DayPicker
        mode="single"
        locale={ko}
        selected={selected}
        onSelect={setSelected}
        footer={footer}
        fromDate={new Date()}
        disabled={disableDay}
      />
    </>
  );
}
