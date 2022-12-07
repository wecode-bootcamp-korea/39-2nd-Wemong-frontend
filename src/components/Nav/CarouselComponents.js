import React, { useState } from 'react';
import styled from 'styled-components';
import Carousel from '../Carousel';

const CarouselComponents = () => {
  const [close, setClose] = useState(true);
  return (
    <>
      {close && (
        <CarouselDrop close={close}>
          <Carousel />
        </CarouselDrop>
      )}
      {close ? (
        <CloseBtn
          onClick={() => {
            setClose(false);
          }}
        >
          <Button>닫기</Button>
        </CloseBtn>
      ) : (
        <CloseBtn
          onClick={() => {
            setClose(true);
          }}
        >
          열기
        </CloseBtn>
      )}
    </>
  );
};

const CarouselDrop = styled.div`
  width: 1107px;
  height: 300px;
  margin: 0 auto;
`;

const CloseBtn = styled.div`
  width: 1107px;
  height: 10px;
  margin: 0 auto;
  display: flex;
  justify-content: end;
`;

const Button = styled.p``;

export default CarouselComponents;
