import React, { Component } from "react";

class UpdateContent extends Component {
  render() {
    console.log(this.props.currentContent);
    return (
      <article>
        <h2>Update</h2>
        <form
          action="/create_process"
          method="post"
          onSubmit={function(event) {
            event.preventDefault();

            let _title = event.target.title.value;
            let _desc = event.target.desc.value;
            this.props.onSubmit(_title, _desc);
          }.bind(this)}
        >
          <p>
            <input
              type="text"
              name="title"
              placeholder={this.props.currentContent.title}
            />
          </p>
          <p>
            <textarea
              name="desc"
              placeholder={this.props.currentContent.desc}
              id=""
              cols="30"
              rows="5"
            ></textarea>
          </p>
          <p>
            <input type="submit" />
          </p>
        </form>
      </article>
    );
  }
}

export default UpdateContent;
