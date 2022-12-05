import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { NavCategoryList, NavList } from './NavList';
// import Navdropdown from './Navdropdown';
// import NavList from './NavList';
const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const token = localStorage.getItem('token');

  return (
    <>
      <DropContainer>
        <NavBody>
          <Container>
            <NavTop onMouseEnter={() => setMenuOpen(false)}>
              <Logo href={'/lectures'}>WeMong</Logo>
              <SearchWrap>
                <SearchInput placeholder="강의를 검색해 보세요"></SearchInput>
                <SearchIcon>
                  <i className="fa-solid fa-magnifying-glass"></i>
                </SearchIcon>
              </SearchWrap>
              <NavTopRight>
                {token ? (
                  <Login
                    href={'/login'}
                    onClick={() => {
                      localStorage.removeItem('token');
                      window.location.reload();
                    }}
                  >
                    로그아웃
                  </Login>
                ) : (
                  <Login href={'/login'}>로그인</Login>
                )}
              </NavTopRight>
            </NavTop>
            <NavBottom>
              <NavBottomWrap onMouseEnter={() => setMenuOpen(true)}>
                {NavCategoryList.map(list => {
                  return (
                    // <Link to={list.path}>
                    <Cooking href={list.path} key={list.id}>
                      {list.title}
                    </Cooking>
                    // </Link>
                  );
                })}
                {/* <Cooking>요리</Cooking>
                 <Study>입시</Study>
                 <It>IT</It> */}
              </NavBottomWrap>
            </NavBottom>
          </Container>
        </NavBody>
        {menuOpen && (
          <NavDropWrap onMouseLeave={() => setMenuOpen(false)}>
            {/* {NavList.map(list =>{
              return(     
              )
            })} */}
            <CookingMenu>
              {NavList.map(subList => {
                return (
                  <ul key={subList.id}>
                    {subList.list.map(list => {
                      return (
                        <li key={list.id}>
                          <KoreanFood href={list.path}>
                            {list.SubCategory}
                          </KoreanFood>
                        </li>
                      );
                    })}
                  </ul>
                );
              })}
              {/* {console.log(NavList)} */}
              {/* <KoreanFood>한식</KoreanFood>
              <ChineseFood>중식</ChineseFood>
              <EuropeanFood>양식</EuropeanFood> */}
            </CookingMenu>
            {/* <StudyMenu>
              <Korean>국어</Korean>
              <English>영어</English>
              <Mathematics>수학</Mathematics>
            </StudyMenu>
            <ItMenu>
              <Programming>프로그래밍</Programming>
              <Video>영상편집</Video>
              <Mos>MOS</Mos>
            </ItMenu> */}
          </NavDropWrap>
        )}
      </DropContainer>
      {/* <Carousel>
        <CarouselImg></CarouselImg>
      </Carousel>
      <FilterContainer></FilterContainer> */}
    </>
  );
};

export default Nav;

const DropContainer = styled.div``;

const NavBody = styled.div`
  border-bottom: 1px solid #f5d400;
  margin-bottom: 1px;
  z-index: 100;
  position: fixed;
  top: 0;
  width: 100%;
  margin: auto;
  background-color: white;
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

const Logo = styled.a`
  color: black;
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
  justify-content: center;
`;

const Login = styled.a`
  color: black;
  display: block;
  position: absolute;
  height: 40px;
  right: 0;
  text-align: center;
  font-size: 1.3rem;
  font-weight: 900;
  padding: 12px 28px 3px 28px;
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

const Cooking = styled.a`
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
  font-size: 1rem;
  width: 300px;
  height: auto;
  z-index: 20;
  position: fixed;

  left: 50%;
  transform: translate(-53%, -50%);
  top: 190px;
  display: flex;
  background-color: white;
  /* display: ${props => (props.menuOpen ? `flex` : `none`)}; */
`;

const CookingMenu = styled.div`
  width: 300px;
  text-align: center;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding: 0 20px 0 30px;
`;

const KoreanFood = styled.a`
  display: block;
  /* margin: auto; */
  padding-bottom: 20px;
  color: black;
`;

const ChineseFood = styled.div`
  /* margin: auto; */
  padding-bottom: 20px;
`;

const EuropeanFood = styled.div`
  /* margin: auto; */
  padding-bottom: 20px;
`;

const StudyMenu = styled.div`
  width: 100px;
  text-align: center;
  cursor: pointer;
`;

const Korean = styled.div`
  /* margin: auto; */
  padding-bottom: 20px;
`;

const English = styled.div`
  /* margin: auto; */
  padding-bottom: 20px;
`;

const Mathematics = styled.div`
  /* margin: auto;s */
  padding-bottom: 20px;
`;

const ItMenu = styled.div`
  width: 100px;
  text-align: center;
  cursor: pointer;
`;

const Programming = styled.div`
  /* margin: auto; */
  padding-bottom: 20px;
`;

const Video = styled.div`
  /* margin: auto; */
  padding-bottom: 20px;
`;

const Mos = styled.div`
  /* margin: auto; */
  padding-bottom: 20px;
`;
