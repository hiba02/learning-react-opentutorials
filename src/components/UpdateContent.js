import React, { Component } from "react";

class UpdateContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.data.id,
      title: this.props.data.title,
      desc: this.props.data.desc
    };
  }
  inputFormHandler(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  render() {
    console.log("currentContent", this.props.currentContent);
    console.log("data: ", this.props.data);
    return (
      <article>
        <h2>Update</h2>
        <form
          action="/update_process"
          method="post"
          onSubmit={function(event) {
            event.preventDefault();
            let _id = this.state.id;
            let _title = this.state.title;
            let _desc = this.state.desc;
            this.props.onSubmit(_id, _title, _desc);
          }.bind(this)}
        >
          <input type="hidden" value={this.state.id} />
          <p>
            <input
              type="text"
              name="title"
              placeholder={this.props.currentContent.title}
              value={this.state.title}
              onChange={this.inputFormHandler.bind(this)}
            />
          </p>
          <p>
            <textarea
              name="desc"
              placeholder={this.props.currentContent.desc}
              id=""
              cols="30"
              rows="5"
              value={this.state.desc}
              onChange={this.inputFormHandler.bind(this)}
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
