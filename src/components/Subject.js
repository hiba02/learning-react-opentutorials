import React, { Component } from "react";

class Subject extends Component {
  render() {
    // console.log("Subject props", this.props);
    return (
      <header>
        <h1>
          <a
            href="/"
            onClick={function(event) {
              event.preventDefault();

              this.props.onChangePage();
            }.bind(this)}
          >
            {this.props.title}
          </a>
        </h1>
        <p>{this.props.subject}</p>
      </header>
    );
  }
}

export default Subject;
