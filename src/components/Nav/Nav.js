import React, { useState } from 'react';
import styled from 'styled-components';
import Navdropdown from './Navdropdown';
import NavList from './NavList';
const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <DropContainer>
        <NavBody>
          <Container>
            <NavTop onMouseEnter={() => setMenuOpen(false)}>
              <Logo>WeMong</Logo>
              <SearchWrap>
                <SearchInput placeholder="강의를 검색해 보세요"></SearchInput>
                <SearchIcon>
                  <i class="fa-solid fa-magnifying-glass"></i>
                </SearchIcon>
              </SearchWrap>
              <NavTopRight>
                <Login>로그인</Login>
              </NavTopRight>
            </NavTop>
            <NavBottom>
              <NavBottomWrap onMouseEnter={() => setMenuOpen(true)}>
                <Cooking>요리</Cooking>
                <Study>입시</Study>
                <It>IT</It>
              </NavBottomWrap>
            </NavBottom>
          </Container>
        </NavBody>
        {menuOpen && (
          <NavDropWrap onMouseLeave={() => setMenuOpen(false)}>
            {/* {NavList.map(list => {return
          ()})} */}
            <CookingMenu>
              <KoreanFood>한식</KoreanFood>
              <ChineseFood>중식</ChineseFood>
              <EuropeanFood>양식</EuropeanFood>
            </CookingMenu>
            <StudyMenu>
              <Korean>국어</Korean>
              <English>영어</English>
              <Mathematics>수학</Mathematics>
            </StudyMenu>
            <ItMenu>
              <Programming>프로그래밍</Programming>
              <Video>영상편집</Video>
              <Mos>MOS</Mos>
            </ItMenu>
          </NavDropWrap>
        )}
      </DropContainer>
      <Carousel>
        <CarouselImg></CarouselImg>
      </Carousel>
      <FilterContainer></FilterContainer>
    </>
  );
};

export default Nav;

const DropContainer = styled.div``;

const NavBody = styled.div`
  border-bottom: 1px solid #eceaeb;
  margin-bottom: 1px;
  z-index: 100;
`;

const Container = styled.div`
  position: sticky;
  top: 0px;
  height: 123px;
  width: 1107px;
  margin: 0 auto;
  position: relative;
`;

const NavTop = styled.div`
  display: flex;
  align-items: center;
  height: 74px;
  position: relative;
`;

const Logo = styled.button`
  display: block;
  font-size: 1.6rem;
  font-weight: 600;
  margin-right: 500px;
  background-color: white;
  border: none;
  cursor: pointer;
`;

const SearchWrap = styled.div`
  display: flex;
  width: 256px;
  height: 40px;
  border-radius: 18px;
  border: 1px solid rgb(228, 229, 237);
  position: relative;
  &:hover {
    border-color: rgb(114, 117, 133);
  }
  &:focus-within {
    border-color: rgb(114, 117, 133);
  }
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  font-size: 1rem;
  width: 190px;
  height: 90%;
  margin-left: 16px;
  margin: auto;
`;

const SearchIcon = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translate(0, -50%);
`;

const NavTopRight = styled.div`
  display: flex;
  align-items: center;
`;

const Login = styled.button`
  display: block;
  position: absolute;
  height: 40px;
  right: 0;
  font-size: 1rem;
  padding: 3px 28px;
  border: none;
  background-color: rgb(245, 212, 0);
  cursor: pointer;
  border-radius: 4px;
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

const NavBottom = styled.div`
  height: 48px;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const NavBottomWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const Study = styled.button`
  background-color: white;
  cursor: pointer;
  border: none;
  color: #303441;
  &:hover {
    border-bottom: 3px solid yellow;
    font-weight: bold;
    color: black;
  }
  width: 100px;
  cursor: pointer;
  font-size: 1.1rem;
  padding: 0 20px;
  padding-bottom: 5px;
`;

const Cooking = styled.button`
  background-color: white;
  cursor: pointer;
  border: none;
  &:hover {
    border-bottom: 3px solid yellow;
    color: black;
    font-weight: bold;
  }
  width: 100px;
  cursor: pointer;
  font-size: 1.1rem;
  padding: 0 20px;
  color: #303441;
  padding-bottom: 5px;
`;

const It = styled.button`
  background-color: white;
  cursor: pointer;
  border: none;
  &:hover {
    border-bottom: 3px solid yellow;
    color: black;
    font-weight: bold;
  }
  width: 100px;
  cursor: pointer;
  font-size: 1.3rem;
  padding: 0 20px;
  color: #303441;
  padding-bottom: 5px;
`;

const NavDropWrap = styled.div`
  width: 300px;
  z-index: 20;
  margin: 0 auto;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  top: 148px;
  display: flex;
  /* display: ${props => (props.menuOpen ? `flex` : `none`)}; */
`;

const CookingMenu = styled.div`
  width: 100px;
  text-align: center;
  cursor: pointer;
`;

const KoreanFood = styled.div`
  margin: auto;
`;

const ChineseFood = styled.div`
  margin: auto;
`;

const EuropeanFood = styled.div`
  margin: auto;
`;

const StudyMenu = styled.div`
  width: 100px;
  text-align: center;
  cursor: pointer;
`;

const Korean = styled.div`
  margin: auto;
`;

const English = styled.div`
  margin: auto;
`;

const Mathematics = styled.div`
  margin: auto;
`;

const ItMenu = styled.div`
  width: 100px;
  text-align: center;
  cursor: pointer;
`;

const Programming = styled.div`
  margin: auto;
`;

const Video = styled.div`
  margin: auto;
`;

const Mos = styled.div`
  margin: auto;
`;

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
