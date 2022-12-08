import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

const Carousel = () => {
  const [carouselData, setCarouselData] = useState([]);

  const settings = {
    arrow: true,
    infinite: true,
    speed: 1000,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 2,
  };

  useEffect(() => {
    fetch('../data/carousel.json')
      // '../data/carousel.json'
      // 'http://10.58.52.187:3000/lectures?category=1'
      .then(response => response.json())
      .then(data => setCarouselData(data));
  }, []);
  console.log(carouselData);
  return (
    <Box>
      <Slider {...settings}>
        {carouselData.map(({ lectureId, images, lectureTitle }) => {
          return (
            <Mink key={lectureId} href={`/lectures/${lectureId}`}>
              <CarouselStyle key={lectureId}>
                <Img alt="piclec" src={images} />
                <Title>{lectureTitle}</Title>
              </CarouselStyle>
            </Mink>
          );
        })}
      </Slider>
    </Box>
  );
};

const Mink = styled.a`
  color: black;
`;
const Box = styled.div`
  z-index: 10;
  width: 1107px;
`;

const CarouselStyle = styled.div`
  height: 300px;
  width: 550px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Img = styled.img`
  height: 280px;
`;

const Title = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

export default Carousel;
