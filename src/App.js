import React, { Component } from "react";
import "./App.css";
import Subject from "./components/Subject";
import TOC from "./components/TOC";
import Content from "./components/Content";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject title="Web" subject="World Wide Web" />
        <Subject title="React" subject="For UI" />
        <TOC />
        <Content title="HTML" desc="HTML is Hyper Text Markup Language." />
      </div>
    );
  }
}

export default App;
