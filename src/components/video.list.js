/* eslint-disable */
import React from 'react';
import VideoListItem from './video.list.item'

// When use functional component, you can get props as argument
const VideoList = (props) => {

  const videoItems = props.videos.map((video) => {
    return <VideoListItem key={video.etag} video={video} />
  })
  
  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;