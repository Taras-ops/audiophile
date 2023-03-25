import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import { ThemeProvider } from 'styled-components';
import { HelmetProvider } from 'react-helmet-async'
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';
import './styles/reset.css'
import Global from './styles/global';
import theme from './styles/theme';

const helmetContext = {}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Global />
          <HelmetProvider context={helmetContext}>
            <Provider store={store}>
              <App />
            </Provider>
          </HelmetProvider>
        </ThemeProvider>
      </BrowserRouter>
  </React.StrictMode>
);

