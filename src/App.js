import React, { Component } from "react";
import "./App.css";

class Subject extends Component {
  render() {
    return (
      <header>
        <h1>{this.props.title}</h1>
        <p>{this.props.subject}</p>
      </header>
    );
  }
}

class TOC extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <a href="1.html">HTML</a>
          </li>
          <li>
            <a href="2.html">CSS</a>
          </li>
          <li>
            <a href="3.html">JavaScript</a>
          </li>
        </ul>
      </nav>
    );
  }
}

class Content extends Component {
  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
        <p>{this.props.desc}</p>
      </article>
    );
  }
}

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
