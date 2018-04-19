import React, { Component } from 'react'
import { connect } from 'dva';
import BraftEditorModal from '../components/BraftEditorModal'
import Umeditor from '../components/Umeditor'
import VideoPlayer from '../components/VideoPlayer'

class Editor extends Component {
  render() {
    return (
      <div>
        <BraftEditorModal />
        <Umeditor />
        <VideoPlayer />
      </div>
    )
  }
}
export default connect()(Editor);
