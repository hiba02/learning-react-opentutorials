import React, { Component } from "react";

class Control extends Component {
  render() {
    return (
      <ul>
        <li>
          <a
            href="/create"
            onClick={function(event) {
              event.preventDefault();
              this.props.onChangemode("create");
            }.bind(this)}
          >
            Create
          </a>
        </li>
        <li>
          <a
            href="/update"
            onClick={function(event) {
              event.preventDefault();
              this.props.onChangemode("update");
            }.bind(this)}
          >
            Update
          </a>
        </li>
        <li>
          <input
            type="button"
            value="delete"
            onClick={function(event) {
              event.preventDefault();
              this.props.onChangemode("delete");
            }.bind(this)}
          />
        </li>
      </ul>
    );
  }
}

export default Control;
