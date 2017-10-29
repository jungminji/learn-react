/* eslint-disable */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search.bar';
import VideoList from './components/video.list';
import VideoDetail from './components/video.detail';

const API_KEY = 'AIzaSyB476XbcW_uPvgWpFA1ojvbs3j_o7JyXSo';

// ES6, functional
// const App = () => {
//   return (
//     <div>
//       <SearchBar />
//     </div>
//   );
// }

// Class component
// props are accessible everywhere within class based component
class App extends Component  {
  constructor (props) {
    super(props);

    this.state = {
      videos: []
    }

    YTSearch({ key: API_KEY, term: 'surfboards' }, (videos) => {
      this.setState({ videos });
    });
  }
  render () {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]} />
        <VideoList videos = {this.state.videos} />
      </div>
    );
  }
}


const container = document.querySelector('.container')
ReactDOM.render(<App />, container);