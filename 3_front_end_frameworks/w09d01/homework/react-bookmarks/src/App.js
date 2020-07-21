import React from 'react';
import Form from './components/Form';

class App extends React.Component {
  state = {
    title: '',
    url: ''
  }

  render() {
    return (
      <div>
        <h1>Bookmarks</h1>
        <Form
          title={this.state.title}
          url={this.state.url}
          />
      </div>
    )
  }
}

export default App;
