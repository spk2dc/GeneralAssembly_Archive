import React, { Component } from 'react';

class App extends Component {
  state = {
    baseURL: 'http://www.omdbapi.com/?apikey=b764ea59&t=',
    movieTitle: '',
    searchURL: '',
  }

  handleChange(evt) {
    this.setState({
      movieTitle: evt.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.setState({
      searchURL: this.state.baseURL + this.state.movieTitle,
    }, () => {
      fetch(this.state.searchURL).then(response => {
        return response.json();
      }).then(data => {
        console.log('data:', data);
      }).catch(err => {
        console.log('error:', err);
      });
    });
  }

  render() {
    return (
      <>
        <form onSubmit={ (evt) => this.handleSubmit(evt) }>
          <label htmlFor="movieTitle">Title: </label>
          <input type="text" id="movieTitle"
            value={ this.state.movieTitle}
            onChange={ (evt) => this.handleChange(evt) }/>
          <input type="submit" value="Search"/>
        </form>
        <a href={ this.state.searchURL }>{ this.state.searchURL }</a>
      </>
    )
  }
}

export default App;
