import React from 'react';
import { createGlobalStyle } from 'styled-components';
import './styles.css';

import Routes from './routes';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: 'Helvetica Neue', 'Helvetica', 'Open Sans', 'Arial', sans-serif;
    background: #f3f3f3;
  }
`;

function App() {
  return (
    <>
      <Routes />
      <GlobalStyles />
    </>
  );
}

export default App;
