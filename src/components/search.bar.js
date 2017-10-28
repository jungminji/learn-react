/* eslint-disable */
// import React from 'react';
import React, { Component } from 'react';

// Functional Component
const SearchBarFn = () => {
   // This line calls React.createElement, which means you will have to import react
  return <input />;
}

// Class component of React
// class SearchBar extends React.Component {
class SearchBar extends Component {
  render () {
    return <input />;
  }
}

export default SearchBar;