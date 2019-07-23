import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Routes from './routes';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: 'Helvetica Neue', 'Helvetica', 'Open Sans', 'Arial', sans-serif;
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
