import { createGlobalStyle } from 'styled-components';
import DoHyeon from './fonts/DoHyeon-Regular.ttf';

const GlobalFont = createGlobalStyle`
	@font-face { 
    font-family: 'Do Hyeon';
    src: url(${DoHyeon}) format('woff');
  }
`;

export default GlobalFont;
