import React from 'react';
import { Link } from 'react-router-dom';
import FOOTER_LIST from './footerList';
import FOOTER_MEMBER from './footerMember';
import styled from 'styled-components';

function Footer() {
  return (
    <Sooter>
      <FooterInner>
        <FooterMenu>
          {FOOTER_LIST.map(({ id, title, list }) => {
            return (
              <FooterList key={id}>
                <H3>{title}</H3>
                <ul>
                  {list.map(({ id, listTitle, path }) => {
                    return (
                      <Link to={path} key={id}>
                        <Li>{listTitle}</Li>
                      </Link>
                    );
                  })}
                </ul>
              </FooterList>
            );
          })}
        </FooterMenu>
        <FooterInfo>
          <FooterDev>
            <h3>Developer</h3>
            <DevEmail>
              {FOOTER_MEMBER.map(({ id, name, img }) => {
                return (
                  <UlLi key={id}>
                    <Img src={img} alt="member" />
                    {name}
                  </UlLi>
                );
              })}
            </DevEmail>
          </FooterDev>

          <License>
            (위)위몽 대표 무 | 서울 강남구 테헤란로 427 위워크타워 10층 |
            통신판매업신고번호 00000000 | 등록번호 사업자 정보 확인
          </License>
        </FooterInfo>
      </FooterInner>
    </Sooter>
  );
}

const Sooter = styled.footer`
  width: 100%;
  background-color: #111;
`;

const FooterInner = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1200px;
  margin: 0 auto;
  padding: 50px 0;
  font-weight: 300;
`;

const FooterMenu = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
  margin-right: 30px;
`;

const FooterList = styled.div`
  margin-right: 120px;
`;

const H3 = styled.h3`
  margin-bottom: 30px;
  color: #fff;
  font-size: 1.6rem;
  font-weight: 500;
`;

const Li = styled.li`
  margin-bottom: 20px;
  color: #ddd;
  font-size: 1.5rem;
  cursor: pointer;
`;

const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const FooterDev = styled.div`
  color: #fff;
  font-size: 1.6rem;
  font-weight: 500;
`;
const DevEmail = styled.ul`
  display: flex;
  width: 40%;
  margin-top: 20px;
`;

const UlLi = styled.li`
  width: 40px;
  height: 40px;
  margin-right: 15px;
  border-radius: 50%;
  background-color: #fff;
  font-size: 1.2rem;
  font-weight: 300;
  text-align: center;
  cursor: pointer;
`;

const Img = styled.img`
  width: 40px;
  height: 40px;
  margin-bottom: 5px;
  overflow: hidden;
  border-radius: 50%;
`;

const License = styled.p`
  border-top: 1px solid #ddd;
  color: #ddd;
  font-size: 1.2rem;
  line-height: 22px;
`;

export default Footer;
