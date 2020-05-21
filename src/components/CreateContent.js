import React, { Component } from "react";

class CreateContent extends Component {
  render() {
    return (
      <article>
        <h2>Create</h2>
        <form
          action="/create_process"
          method="post"
          onSubmit={function(event) {
            // console.log(event);
            event.preventDefault();
            // debugger;
            // event form value??
            // event => target => title => value
            // title: event.target.title.value
            // desc: event.target.desc.value
            let _title = event.target.title.value;
            let _desc = event.target.desc.value;
            this.props.onSubmit(_title, _desc);
          }.bind(this)}
        >
          <p>
            <input type="text" name="title" placeholder="title" />
          </p>
          <p>
            <textarea
              name="desc"
              placeholder="description"
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

export default CreateContent;
