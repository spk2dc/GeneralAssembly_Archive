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
        <Form
          title={this.state.title}
          url={this.state.url}
          />
      </div>
    )
  }
}

export default App;
