// import React, { useState } from 'react';
// import styled from 'styled-components';
// import InputRange from 'react-input-range';
// import 'react-input-range/lib/css/index.css';

// export default function PriceRange(props) {
//   const { setLectures, lectures, setData } = props;
//   const [pricerange, setPriceRange] = useState({
//     min: 0,
//     max: 10,
//   });
//   const { min, max } = pricerange;
//   const PriceApply = () => {
//     fetch(
//       `http://10.58.52.211:3000/lectures?minPrice=${min * 10000}&maxPrice=${
//         max * 10000
//       }`,
//       {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       }
//     )
//       .then(response => response.json())
//       .then(result => {
//         setLectures(result.lectures);
//         setData(prev => [...prev, result.lectures]);
//       });
//   };

//   // const submitHandleFilter = () => {
//   //   setPrice;
//   // };

//   console.log(pricerange.min, pricerange.max);
//   console.log(Object.keys(pricerange));

//   return (
//     <Container>
//       <Title>가격 범위</Title>
//       <form action="">
//         <InputRange
//           maxValue={10}
//           minValue={0}
//           formatLabel={value => `${value}만원`}
//           value={pricerange}
//           onChange={value => setPriceRange(value)}
//         />
//       </form>
//       <InputContainer>
//         <div>
//           <InputHeader>최저가격</InputHeader>
//           <InputContent>
//             <input type="text" value={`${min}만원`} />
//           </InputContent>
//         </div>
//         <Range>-</Range>
//         <div>
//           <InputHeader>최고가격</InputHeader>
//           <InputContent>
//             <input type="text" value={`${max}만원`} />
//           </InputContent>
//         </div>
//       </InputContainer>
//       <ButtonWrap>
//         <PriceBtn onClick={PriceApply}>적용하기</PriceBtn>
//       </ButtonWrap>
//     </Container>
//   );
// }

// const Container = styled.div`
//   right: 200px;
//   width: 400px;
//   margin-top: 28px;
//   padding: 30px;
//   background-color: white;
//   border: 1px solid rgb(245, 212, 0);
//   border-radius: 10px;
//   position: absolute;
//   top: 477px;
//   left: 50%;
//   margin-left: -200px;
//   z-index: 50;
//   .input-range__track--active {
//     background-color: rgb(245, 212, 0);
//   }
//   .input-range__slider {
//     background-color: rgb(245, 212, 0);
//     border: rgb(245, 212, 0);
//   }
//   .input-range {
//     background-color: white;
//   }
// `;

// const Title = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-around;
//   font-size: 25px;
//   margin-bottom: 22px;
// `;

// const InputContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-top: 45px;
// `;

// const InputHeader = styled.span`
//   font-size: 12px;
//   color: #999;
// `;

// const InputContent = styled.div`
//   display: flex;
//   align-items: center;
//   border: 1px solid #e4e4e4;
//   border-radius: 15px;
//   font-size: 14px;
//   margin-top: 8px;
//   input {
//     font-size: 14px;
//     width: 150px;
//     height: 32px;
//     border: 0;
//     text-align: center;
//     outline: none;
//     appearance: none;
//     display: inline-block;
//     background: transparent;
//   }
// `;

// const Range = styled.span`
//   padding: 25px 0 0 0;
// `;

// const ButtonWrap = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-top: 30px;
// `;

// const PriceBtn = styled.button`
//   font-size: 13px;
//   padding: 10px 48px;
//   background-color: rgb(245, 212, 0);
//   color: black;
//   display: flex;
//   align-items: center;
//   border: none;
//   border-radius: 100px;
//   cursor: pointer;
//   border: 0;
// `;
