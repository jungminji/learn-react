/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
// Create a new component.
// This component should produce some HTML

// ES5
// const App = function () {
//   return <div>Learning React!</div>;
// }

// ES6
const App = () => {
  return <div>Learning React!</div>;
}

// Take this component's generated HTML and put it on the page
// (in the DOM)
const container = document.querySelector('.container')
ReactDOM.render(<App />, container);