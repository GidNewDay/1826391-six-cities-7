import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const CARDS_AMOUNT = 5;

ReactDOM.render(
  <React.StrictMode>
    <App cardsAmount={CARDS_AMOUNT}/>
  </React.StrictMode>,
  document.getElementById('root'));
