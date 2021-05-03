import React from 'react';

import { BrowserRouter as Router } from "react-router-dom";

import Rotas from './rotas';
import GlobalStyle from './styles/global';
import { AppWrapper, Header } from "./components";

const App: React.FC = () => {
  return (
    <AppWrapper>
      <Router>
        <Header />
        <Rotas />
        <GlobalStyle />
      </Router>
    </AppWrapper>
  );
}

export default App;