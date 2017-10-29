/* eslint-disable */
import React from 'react';

const VideoListItem = ({video}) => {
  // const video = props.video
  // {video} is identical to const video ...
  const imgSrc = video.snippet.thumbnails.default.url;

  return (
    <li className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imgSrc}/>
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;