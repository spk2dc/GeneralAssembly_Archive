import React from "react";
import Form from "./components/Form";
import AllBookmarks from "./components/AllBookmarks";

let baseURL = "http://localhost:3003";

class App extends React.Component {
  state = {
    allBookmarks: [],
    title: "",
    url: "",
  };

  getBookmarks = () => {
    fetch(`${baseURL}/bookmark`)
      .then((data) => {
        return data.json();
      })
      .then((jsonData) => {
        console.log(`App -> getBookmarks -> jsonData`, jsonData);
        this.setState({
          allBookmarks: jsonData,
        });
      })
      .catch((err) => console.log(`App -> getBookmarks -> err`, err));
  };

  addBookmark = (newBookmark) => {
    const copyBookmarks = [...this.state.allBookmarks];
    // console.log(`App -> addBookmarks -> copyBookmarks`, copyBookmarks);
    copyBookmarks.push(newBookmark);
    this.setState({
      allBookmarks: copyBookmarks,
    });
  };

  deleteBookmark = (id) => {
    fetch(`${baseURL}/bookmark/${id}`, {
      method: "DELETE",
    }).then((res) => {
      const findIndex = this.state.allBookmarks.findIndex(
        (val) => val._id === id
      );
      const copyBookmarks = [...this.state.allBookmarks];
      copyBookmarks.splice(findIndex, 1);
      this.setState({ allBookmarks: copyBookmarks });
    });
  };

  componentDidMount = () => {
    this.getBookmarks();
  };

  render() {
    return (
      <div>
        <h1>Bookmarks</h1>
        <Form
          title={this.state.title}
          url={this.state.url}
          baseURL={baseURL}
          addBookmark={this.addBookmark}
        />
        <AllBookmarks
          baseURL={baseURL}
          allBookmarks={this.state.allBookmarks}
          deleteBookmark={this.deleteBookmark}
        />
      </div>
    );
  }
}

export default App;
