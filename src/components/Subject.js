import React, { Component } from "react";

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

export default Subject;
