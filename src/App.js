// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import TOC from './components/TOC';
import Subject from './components/Subject';
import Contents from './components/Contents';


class App extends Component {
  //생성자 for state
  constructor(props) {
    super(props);
    this.state = {
      //키밸류 형태의 구조
      subject: { title: 'WEB', sub: 'World Wide Web' },
      contents: [
        { id: 1, title: 'HTML', desc:'HTML is Hyper Text Markup Language.' },
        { id: 2, title: 'CSS', desc:'CSS is for design' },
        { id: 3, title: 'JavaScript', desc:'JavaScript is for interactive' },
      ]
    }
  }
  render() {
    return (
      <>
        {/* <Subject /> */}
        {/* state 에서 받아옴 */}
        <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject>
        <TOC data={this.state.contents}></TOC>
        {/* <Contents title="HTML" desc="HTML is Hyper Text Markup Language."></Contents> */}
        <Contents title={this.state.contents[0].title} desc={this.state.contents[0].desc}></Contents>

      </>
    );
  }
}

export default App;
