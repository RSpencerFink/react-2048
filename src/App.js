import React from 'react';

import ContextProvider from './provider/ContextProvider';
import { GlobalStyles, TypographyStyles } from './styles/global';

import { GameBoard } from './components';

const App = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <TypographyStyles />
      <ContextProvider>
        <GameBoard />
      </ContextProvider>
    </div>
  );
};

export default App;
