import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import GlobalFont from './styles/GlobalFont';
import theme from './styles/theme';
import Router from './Router';
import variables from './styles/variables';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={{ theme, variables }}>
    <GlobalStyle />
    <GlobalFont />
    <Router />
  </ThemeProvider>
);
