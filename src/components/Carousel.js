import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
<<<<<<< HEAD

const Carousel = () => {
  const [carouselData, setCarouselData] = useState([]);
=======
import { useLocation } from 'react-router-dom';

const Carousel = () => {
  const [carouselData, setCarouselData] = useState([]);
  const location = useLocation();
  const url = location.search.split('?')[1];
>>>>>>> 51aa02a (modify:머지전 맞춰보고 경로등 수정)

  const settings = {
    arrow: true,
    infinite: true,
    speed: 1000,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 2,
  };

  console.log(carouselData);

  useEffect(() => {
    fetch(`http://10.58.52.211:3000/lectures?${url}`)
      .then(response => response.json())
      .then(data => setCarouselData(data.lectures));
  }, []);
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
<<<<<<< HEAD
=======
  background-color: white;
>>>>>>> 51aa02a (modify:머지전 맞춰보고 경로등 수정)
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
<<<<<<< HEAD
=======
  font-size: 1rem;
  font-weight: 900;
>>>>>>> 51aa02a (modify:머지전 맞춰보고 경로등 수정)
  &:hover {
    cursor: pointer;
  }
`;

export default Carousel;
