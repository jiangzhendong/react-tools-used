/**
 * Created by j.wind on 2018/4/19.
 */
import React, { Component } from 'react'
import Editor from'react-umeditor';

class Umeditor extends Component {
  constructor(props){
    super(props);
    this.state = {
      content: ""
    }
  }
  handleChange(content){
    this.setState({
      content: content
    })
  }
  getIcons =() => {
    const icons = [
      "source | undo redo | bold italic underline strikethrough fontborder emphasis | ",
      "paragraph fontfamily fontsize | superscript subscript | ",
      "forecolor backcolor | removeformat | insertorderedlist insertunorderedlist | selectall | ",
      "cleardoc  | indent outdent | justifyleft justifycenter justifyright | touppercase tolowercase | ",
      "horizontal date time  | image emotion spechars | inserttable"
    ]
    return icons;
  }
  getPlugins = () => {
    return {
      "image": {
        "uploader": {
          "name":"file",
          "url": "/api/upload"
        }
      }
    }
  }
  render(){
    const icons = this.getIcons();
    const plugins = this.getPlugins();
    return (<Editor ref="editor"
                    icons={icons}
                    value={this.state.content} defaultValue="<p>React Umeditor</p>"
                    onChange={this.handleChange.bind(this)}
                    plugins={plugins} />)
  }
}
