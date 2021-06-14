import React from 'react';
import PropTypes from 'prop-types';
import Home from '../home/home';

function App({ cardsAmount }) {
  return <Home cardsAmount={cardsAmount} />;
}

App.propTypes = {
  cardsAmount: PropTypes.number.isRequired,
};

export default App;
