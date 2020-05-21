import React, { Component } from "react";
import "./App.css";
import Subject from "./components/Subject";
import TOC from "./components/TOC";
import ReadContent from "./components/ReadContent";
import CreateContent from "./components/CreateContent";
import UpdateContent from "./components/UpdateContent";
import Control from "./components/Control";
class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode: "create",
      selected_content_id: 2,
      subject: {
        title: "Web",
        sub: "World Wide Web"
      },
      welcome: { title: "Welcome", desc: "Hello, React!" },
      contents: [
        { id: 1, title: "HTML", desc: "HTML is for information" },
        { id: 2, title: "CSS", desc: "CSS is for design" },
        { id: 3, title: "JavaScript", desc: "JavaScript is for interactive" }
      ]
    };
  }

  render() {
    let _title,
      _desc,
      _article = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc} />;
    } else if (this.state.mode === "read") {
      let i = 0;
      while (i < this.state.contents.length) {
        let data = this.state.contents[i];
        if (data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i + 1;
      }
      _article = <ReadContent title={_title} desc={_desc} />;
    } else if (this.state.mode === "create") {
      _article = (
        <CreateContent
          onSubmit={function(_title, _desc) {
            this.max_content_id = this.max_content_id + 1;
            let newContent = {
              id: this.max_content_id,
              title: _title,
              desc: _desc
            };

            // console.log("newContent", newContent);
            let addedContent = this.state.contents.concat(newContent);
            this.setState({
              contents: addedContent
            });
          }.bind(this)}
        />
      );
    } else if (this.state.mode === "update") {
      let currentId = this.state.selected_content_id - 1;
      let currentContent = this.state.contents[currentId];
      _article = (
        <UpdateContent
          currentContent={currentContent}
          onSubmit={function(_title, _desc) {
            this.max_content_id = this.max_content_id + 1;
            let newContent = {
              id: this.max_content_id,
              title: _title,
              desc: _desc
            };

            // console.log("newContent", newContent);
            let addedContent = this.state.contents.concat(newContent);
            this.setState({
              contents: addedContent
            });
          }.bind(this)}
        />
      );
    }
    const onChangePage = () => {
      if (this.state.mode === "read") {
        this.setState({
          mode: "welcome"
        });
      }
    };

    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          subject={this.state.subject.sub}
          onChangePage={onChangePage}
        />

        <TOC
          data={this.state.contents}
          onChangePage={function(id) {
            // console.log("this", this);
            this.setState({
              mode: "read",
              selected_content_id: id
            });
          }.bind(this)}
        />
        <Control
          onChangemode={function(setMode) {
            this.setState({ mode: setMode });
          }.bind(this)}
        />
        {_article}
      </div>
    );
  }
}

export default App;
