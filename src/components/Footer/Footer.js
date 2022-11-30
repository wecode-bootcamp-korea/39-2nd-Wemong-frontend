import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';

const Footer = () => {
  return <FooterBox>안녕</FooterBox>;
};

const FooterBox = styled.div`
  width: 100vw;
  height: 100px;
  background-color: ${theme.kmongYellow};
`;

export default Footer;
