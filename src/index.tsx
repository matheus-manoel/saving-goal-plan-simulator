import React from 'react';
import { ThemeProvider } from 'styled-components';
import ReactDOM from 'react-dom';

import SavingGoalPage from './pages/SavingGoal';
import GlobalStyle from './styles/global';
import main from './styles/themes/main';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={main}>
      <GlobalStyle />
      <SavingGoalPage />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
