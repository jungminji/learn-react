/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search.bar';

const API_KEY = 'AIzaSyB476XbcW_uPvgWpFA1ojvbs3j_o7JyXSo';

// ES6
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

const container = document.querySelector('.container')
ReactDOM.render(<App />, container);