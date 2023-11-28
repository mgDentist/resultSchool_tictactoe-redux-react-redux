import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import './index.module.css';
import TicTacToeContainer from './components/TicTacToeContainer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <TicTacToeContainer />
    </Provider>
  </React.StrictMode>
);
