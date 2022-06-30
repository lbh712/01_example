import "./App.css";
import React, { Component } from "react";
import TOC from "./components/TOC";
import Subject from "./components/Subject";
import ReadContent from "./components/ReadContent";
import Control from "./components/Control";
import CreateContent from "./components/CreateContent";
import UpdateContent from "./components/UpdateContent";

class App extends Component {
  //생성자 for state
  constructor(props) {
    super(props);
    this.max_content_id = 3;
    this.state = {

      //키밸류 형태의 구조
      mode: "read",
      selected_content_id: 1,
      subject: { title: "WEB", desc: "World Wide Web" },
      welcome: { title: "Welcome", desc: "Hello, React!!" },
      contents: [
        { id: 1, title: "HTML", desc: "HTML is Hyper Text Markup Language." },
        { id: 2, title: "CSS", desc: "CSS is for design" },
        { id: 3, title: "JavaScript", desc: "JavaScript is for interactive" },
      ]
    }
  }


  //getReadContent 메소드 생성 (update, delete 에 사용, 재사용성을 높이는 방식)
  getReadContent() {
    let i = 0;
    while (i < this.state.contents.length) {
      let data = this.state.contents[i];
      if (data.id === this.state.selected_content_id) {
        return data;
      }
      i = i + 1;
    }
  }
  //getReadContent 메소드 종료

  //getContent 메소드 생성
  getContent() {
    let _title, _desc, _article = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>

    } else if (this.state.mode === 'read') {
      let _content = this.getReadContent();
      _article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>
      //getContent 메소드 종료

      {/* ////////////////////////////////////////////////////////////////////////////////////////////////// */ }
      // Create Form 생성
    } else if (this.state.mode === 'create') {
      _article =
        <CreateContent onSubmit={function (_title, _desc) {
          this.max_content_id = this.max_content_id + 1;
          // // push 원본을 다이렉트로 사용하고 싶을때 사용
          // this.state.contents.push(
          //   { id: this.max_content_id, title: _title, desc: _desc }
          // );

          // concat 원본데이터를 가져와서 그대로 복사해서 사용
          // let _contents = this.state.contents.concat(
          //   { id: this.max_content_id, title: _title, desc: _desc }
          // );

          let _contents = Array.from(this.state.contents);
          _contents.push(
            { id: this.max_content_id, title: _title, desc: _desc }
          );

          this.setState({
            // contents: this.State.contents
            mode: 'read',
            contents: _contents,
            selected_content_id: this.max_content_id
          })
        }.bind(this)}></CreateContent>
      // Create Form 종료
      {/* ////////////////////////////////////////////////////////////////////////////////////////////////// */ }
      // Update Form 생성
    } else if (this.state.mode === 'update') {
      let _content = this.getReadContent();
      _article =
        <UpdateContent
          data={_content}
          onSubmit={function (_id, _title, _desc) {
            let _contents = Array.from(this.state.contents);
            let i = 0;
            while (i < _contents.length) {
              if (_contents[i].id === _id) {
                _contents[i] = { id: _id, title: _title, desc: _desc }
                break;
              }
              i = i + 1;
            }
            this.setState({
              // contents: this.State.contents
              contents: _contents,
              mode: "read"
            })
          }.bind(this)}>
        </UpdateContent>
    }
    return _article;
  }
  // Update Form 종료
  render() {
    console.log("App render");
    return (
      <>
        {/* ////////////////////////////////////////////////////////////////////////////////////////////////// */}
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
                mode: 'read',
                selected_content_id: Number(id)
              }
            );
          }.bind(this)}>
        </TOC>
        {/* ////////////////////////////////////////////////////////////////////////////////////////////////// */}

        {/* CRUD 기능 생성 */}
        {/* <ul>
          <li><a href="/create">create</a></li>
          <li><a href="/update">update</a></li>
          <li><input type="button" value="dalete"></input></li>
        </ul> */}

        {/* <Control title="CRUD"></Control> */}

        <Control onChangeMode={function (_mode) {
          this.setState({
            mode: _mode
          });
        }.bind(this)}>
        </Control>

        {/* Arrow Function */}
        {/* <Control onChangeMode={(e) => {
          this.setState({
            mode: e
          })
        }}>
        </Control> */}

        {/* ////////////////////////////////////////////////////////////////////////////////////////////////// */}

        {/* <Content title="HTML" desc="HTML is Hyper Text Markup Language."></Content> */}

        {/* <Content title={this.state.Content[0].title} desc={this.state.Content[0].desc}></Content> */}
        {this.getContent()}
      </>
    );
  }
}

export default App;