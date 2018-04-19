/**
 * Created by j.wind on 2018/4/19.
 */
'use strict';
import React, { Component } from 'react'

// 引入编辑器以及编辑器样式
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/braft.css'

class BraftEditorModal extends Component {

  render () {

    const editorProps = {
      height: 500,
      contentFormat: 'html',
      initialContent: '<p>Hello World!</p>',
      onChange: this.handleChange,
      onRawChange: this.handleRawChange
    }

    return (
      <div className="demo">
        <BraftEditor {...editorProps}/>
      </div>
    )
  }

  handleChange = (content) => {
    console.log(content)
  };

  handleRawChange = (rawContent) => {
    console.log(rawContent)
  }

}
