import React from "react";

export default class Form extends React.Component {
  state = {
    title: "",
    url: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleEnter = (event) => {
    if (event.key === "Enter") {
      this.handleSubmit(event);
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    fetch(this.props.baseURL + "/bookmark", {
      method: "POST",
      body: JSON.stringify({
        title: this.state.title,
        url: this.state.url,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.props.addBookmark(data);
        this.setState({
          title: "",
          url: "",
        });
      });
  };

  render() {
    return (
      <form onSubmit={(evt) => this.handleSubmit(evt)}>
        <label htmlFor='title'>Title: </label>
        <input
          type='text'
          id='title'
          onChange={(evt) => this.handleChange(evt)}
          value={this.state.title}
        />

        <label htmlFor='url'>URL: </label>
        <input
          type='text'
          id='url'
          onChange={(evt) => this.handleChange(evt)}
          value={this.state.url}
        />
        <input type='submit' value='Add a Bookmark' />
      </form>
    );
  }
}
