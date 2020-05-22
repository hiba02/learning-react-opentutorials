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
      mode: "welcome",
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

  onChangePage() {
    if (this.state.mode === "read") {
      this.setState({
        mode: "welcome"
      });
    }
  }

  getReadContents() {
    let i = 0;
    while (i < this.state.contents.length) {
      let data = this.state.contents[i];
      if (data.id === this.state.selected_content_id) {
        return data;
        break;
      }
      i = i + 1;
    }
  }
  getContent() {
    let _title,
      _desc,
      _article = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc} />;
    } else if (this.state.mode === "read") {
      let _content = this.getReadContents();
      _article = <ReadContent title={_content.title} desc={_content.desc} />;
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

            let addedContent = this.state.contents.concat(newContent);
            this.setState({
              contents: addedContent,
              mode: "read",
              selected_content_id: newContent.id
            });
          }.bind(this)}
        />
      );
    } else if (this.state.mode === "update") {
      let _content = this.getReadContents();
      let currentId = this.state.selected_content_id - 1;
      let currentContent = this.state.contents[currentId];
      _article = (
        <UpdateContent
          data={_content}
          currentContent={currentContent}
          onSubmit={function(_id, _title, _desc) {
            let newContent = {
              id: _id,
              title: _title,
              desc: _desc
            };
            // Copy the array with same elements
            let newArrayContents = Array.from(this.state.contents);
            newArrayContents[_id - 1] = newContent;

            for (let eachContent of this.state.contents) {
              if (eachContent.id === _id) {
                this.setState({
                  contents: newArrayContents,
                  mode: "read"
                });
                break;
              }
            }
          }.bind(this)}
        />
      );
    }

    return _article;
  }
  render() {
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          subject={this.state.subject.sub}
        />

        <TOC
          data={this.state.contents}
          onChangePage={function(id) {
            this.setState({
              mode: "read",
              selected_content_id: id
            });
          }.bind(this)}
        />
        <Control
          onChangemode={function(setMode) {
            if (setMode === "delete") {
              if (window.confirm("Really?")) {
                let _contents = Array.from(this.state.contents);

                for (let i = 0; i < _contents.length; i++) {
                  if (_contents[i].id === this.state.selected_content_id) {
                    _contents.splice(i, 1);

                    break;
                  }
                }
                this.setState({
                  mode: "welcome",
                  contents: _contents
                });
              }
            } else {
              this.setState({ mode: setMode });
            }
          }.bind(this)}
          currentId={this.state.selected_content_id}
        />
        {this.getContent()}
      </div>
    );
  }
}

export default App;
