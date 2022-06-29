// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import TOC from './components/TOC';
import Subject from './components/Subject';
import Contents from './components/Contents';


class App extends Component {
  render() {
    return (
      <>
        {/* <Subject /> */}
        <Subject title="Web" sub="World Wide Web!"></Subject>
        <TOC></TOC>
        <Contents title="HTML" desc="HTML is Hyper Text Markup Language."></Contents>
      </>
    );
  }
}

export default App;
