import React from 'react';
import Form from './components/Form';

let baseURL = 'http://localhost:3003'

class App extends React.Component {
  state = {
    title: '',
    url: ''
  }

  addBookmark = () => {

  }

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
      </div>
    )
  }
}

export default App;
