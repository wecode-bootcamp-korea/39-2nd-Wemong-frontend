// import React from 'react';
import React from 'react';
import { format } from 'date-fns';
import { DayPicker, Row, RowProps } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import ko from 'date-fns/locale/ko';
import { differenceInCalendarDays } from 'date-fns';
import { useState } from 'react';

function isPastDate(date) {
  return differenceInCalendarDays(date, new Date()) < 0;
}

function OnlyFutureRow(props) {
  const isPastRow = props.dates.every(isPastDate);
  if (isPastRow) return <></>;
  return <Row {...props} />;
}

const Calendar = props => {
  const [selected, setSelected] = React.useState('');

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
  }
  return (
    <>
      <style>{`
      
      .rdp {display: flex; align-items: center; justify-content: center; width: 350px; border: 1px solid #eceaeb; margin: auto; padding: 20px 0px; border-radius: 20px; margin-top: 30px; z-index:10;}
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
        hidden={isPastDate}
        components={{ Row: OnlyFutureRow }}
        fromDate={new Date()}
        showOutsideDays
      />
    </>
  );
};

export default Calendar;
