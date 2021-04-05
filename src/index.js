import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { CustomThemeProvider } from './Context/CustomThemeContext/CustomThemeContext';

ReactDOM.render(
  <BrowserRouter>
    <CustomThemeProvider>
      <App />
    </CustomThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
