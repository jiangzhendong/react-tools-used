/**
 * Created by j.wind on 2018/4/19.
 */
import React, { Component } from 'react'
import ReactPlayer from 'react-player'

class VideoPlayer extends Component {
  render() {
    return <ReactPlayer controls="true" url='https://dl104.yunpan.360.cn/intf.php?method=Download.downloadFile&qid=2543875120&fname=%2FWildling.2018.720p.WEBRip.XviD.AC3-FGT.mp4&fhash=8b65a02516238708b7a37714b76686d7ba78fe19&dt=104_104.a8e42236e8a3cc0dcc2cbe4c1ee93f52&v=1.0.1&rtick=15241156491785&open_app_id=0&host=dl104.yunpan.360.cn&devtype=ecs_web&sign=0f855b63ba5d0c82c991fb87b1ed3d21&&token=661420900.7.67317c87.2543875120.15221570242400492.1524115147' playing />
  }
}

VideoPlayer.propTypes = {
};

export default VideoPlayer;
