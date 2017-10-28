/* eslint-disable */
// import React from 'react';
import React, { Component } from 'react';

// Functional Component, no ability :/
const SearchBarFn = () => {
   // This line calls React.createElement, which means you will have to import react
  return <input />;
}

// Class component of React
// class SearchBar extends React.Component {
class SearchBar extends Component {
  constructor (props) {
    super(props);
    // state is immutable so you have to use this.setState method
    this.state = {
      keyword: ''
    };
  }
  render () {
    return (
      <div>
        <input 
          onChange = {
            event => this.setState({
              keyword: event.target.value
            })
          }
        />
        Keyword: { this.state.keyword }
      </div>
    );
  }
}

export default SearchBar;