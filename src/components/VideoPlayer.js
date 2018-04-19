/**
 * Created by j.wind on 2018/4/19.
 */
import React, { Component } from 'react'
import ReactPlayer from 'react-player'

class VideoPlayer extends Component {
  constructor(){
    super(props);
  }
  render() {
    return <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' playing />
  }
}

VideoPlayer.propTypes = {
};

export default VideoPlayer;
