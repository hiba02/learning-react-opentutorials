import React, { Component } from "react";

class TOC extends Component {
  shouldComponentUpdate(newProps, newState) {
    if (this.props.data === newProps.data) {
      return false;
    } else {
      return true;
    }
  }
  render() {
    let list = [];
    let data = this.props.data;
    let i = 0;
    while (i < data.length) {
      let contentId = data[i].id;
      list.push(
        <li key={data[i].id}>
          <a
            data-id={data[i].id}
            href={"/content" + data[i].id}
            onClick={function(e) {
              e.preventDefault();
              this.props.onChangePage(contentId);
            }.bind(this)}
          >
            {data[i].title}
          </a>
        </li>
      );
      i = i + 1;
    }
    return (
      <nav>
        <ul>{list}</ul>
      </nav>
    );
  }
}

export default TOC;
