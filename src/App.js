import "./App.css";
import React, { Component } from "react";
import TOC from "./components/TOC";
import Subject from "./components/Subject";
import Contents from "./components/Contents";

class App extends Component {
  //생성자 for state
  constructor(props) {
    super(props);
    this.state = {

      //키밸류 형태의 구조
      mode: "welcome",
      selected_content_id: 2,
      welcome: { title: "Welcome", desc: "Hello, React!!" },
      subject: { title: "WEB", desc: "World Wide Web" },
      contents: [
        { id: 1, title: "HTML", desc: "HTML is Hyper Text Markup Language." },
        { id: 2, title: "CSS", desc: "CSS is for design" },
        { id: 3, title: "JavaScript", desc: "JavaScript is for interactive" },
      ]
    }
  }
  render() {
    console.log("App render");
    let _title, _desc = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }
    else if (this.state.mode === 'read') {
      let i = 0;
      while (i < this.state.contents.length) {
        let data = this.state.contents[i];
        if (data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i + 1;
      }

    }

    return (
      <>
        {/* state 에서 받아옴 */}
        {/* <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject> */}

        {/* setState+bind */}
        {/* <header>
          <h1><a href='/' onClick={function (e) {
            e.preventDefault();
            this.setState({ mode: 'welcome' });
          }.bind(this)}>{this.state.subject.title}</a></h1>
          {this.state.subject.sub}
        </header> */}

        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            this.setState({ mode: 'welcome' });
          }.bind(this)}>
        </Subject>

        {/* ////////////////////////////////////////////////////////////////////////////////////////////////// */}

        <TOC data={this.state.contents}
          onChangePage={function (id) {
            this.setState(
              {
                mode: 'read', selected_content_id: Number(id)
              }
            );
          }.bind(this)}></TOC>

        {/* ////////////////////////////////////////////////////////////////////////////////////////////////// */}

        {/* <Content title="HTML" desc="HTML is Hyper Text Markup Language."></Content> */}
        <Contents title={_title} desc={_desc}></Contents>
        {/* <Content title={this.state.Content[0].title} desc={this.state.Content[0].desc}></Content> */}

      </>
    );
  }
}

export default App;
