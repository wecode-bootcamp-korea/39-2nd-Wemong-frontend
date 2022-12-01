// // import React from 'react';
// import React, { useEffect } from 'react';
// import { format } from 'date-fns';
// import { DayPicker, Row, RowProps } from 'react-day-picker';
// import 'react-day-picker/dist/style.css';
// import ko from 'date-fns/locale/ko';
// import { differenceInCalendarDays } from 'date-fns';
// import { useState } from 'react';

// function isPastDate(date) {
//   return differenceInCalendarDays(date, new Date()) < 0;
// }

// function OnlyFutureRow(props) {
//   const isPastRow = props.dates.every(isPastDate);
//   if (isPastRow) return <></>;
//   return <Row {...props} />;
// }

// const Calendar = props => {
//   const [selected, setSelected] = React.useState(new Date());
//   console.log(selected);
//   const { setLectures, lectures, setData } = props;
//   const applyCalendar = () => {
//     fetch(`http://10.58.52.211:3000/lectures?date=${fullDate}`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//       .then(response => response.json())
//       .then(result => {
//         setLectures(result.lectures);
//         setData(prev => [...prev, result.lectures]);
//       });
//   };

//   let footer = '';
//   if (selected) {
//     props.setReservation('예약하기');
//     footer = (
//       <>
//         <p className="date">
//           날짜를 선택하였습니다. {format(selected, 'yyyy-MM-dd')}.
//         </p>
//         <div className="ApplyWrap">
//           <button className="Apply" onClick={applyCalendar}>
//             적용하기
//           </button>
//         </div>
//       </>
//     );
//   }
//   if (!selected) {
//     props.setReservation('날짜를 선택해주세요.');
//   }
//   // console.log(selected);
//   // const newDate = () => {
//   //   selected.getFUllYear();
//   //   selected.getMonth();
//   //   selected.getDate();
//   //   return setSelected(newDate);
//   // };

//   // const makeDate = ()=> {
//   //   if(selected === ''){
//   //     return setSelected(new Date())
//   //   }else if (selected===)

//   // }

//   // const newMonth = selected.getMonth() + 1;
//   // // console.log(newMonth);
//   // const newDay = selected.getDate();
//   // // console.log(newDay);
//   // const newYear = selected.getFullYear();
//   // const FullDate = `${newYear}${newMonth}${newDay}`;
//   // // console.log(FullDate);
//   // console.log('selected:', selected);

//   const fullDate = new Date(
//     selected.getTime() - selected.getTimezoneOffset() * 60000
//   )
//     .toISOString()
//     .slice(2, 10)
//     .replaceAll('-', '');
//   console.log(fullDate);

//   // const applyCalendar = () => {
//   //   fetch(`http://10.58.52.211:3000/lectures?${fullDate}`, {
//   //     method: 'GET',
//   //     headers: {
//   //       'Content-Type': 'application/json',
//   //     },
//   //   })
//   //     .then(response => response.json())
//   //     .then(result => {
//   //       setLectures(result.lectures);
//   //     });
//   // };
//   //fulldate 백에 보내주면 되는거
//   // console.log(fullDate);
//   return (
//     <>
//       <style>{`

//       .rdp {display: flex; align-items: center; justify-content: center; width: 350px; border: 1px solid #eceaeb; margin: auto; padding: 20px 0px; border-radius: 20px; margin-top: 30px; z-index:30; position:absolute; top:477px; background-color:white;}
//       .rdp-day_selected { background-color: #ff9100}
//       .rdp-day_selected:hover {background-color: #ff9100}
//       .date {text-align: center; margin-top: 10px; background-color: #eceaeb; padding: 5px 0px; color: black; font-weight: bold; font-size: 1rem; border-radius: 20px;}
//       .ApplyWrap {text-align: center; margin-top: 15px;  }
//       .Apply {background-color: rgb(245, 212, 0); color: black; border: none;   font-size: 13px;
//         padding: 10px 48px; border: none;
//         border-radius: 100px; cursor: pointer;}
//       `}</style>
//       <DayPicker
//         mode="single"
//         locale={ko}
//         selected={selected}
//         onSelect={setSelected}
//         footer={footer}
//         hidden={isPastDate}
//         components={{ Row: OnlyFutureRow }}
//         fromDate={new Date()}
//         showOutsideDays
//       />
//     </>
//   );
// };

// export default Calendar;
