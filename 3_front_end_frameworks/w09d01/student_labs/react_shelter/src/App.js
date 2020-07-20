import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      holidays: []
    }
  }

  render() {
    return (
      <div className='container'>
       <h1>Animal Shelter API</h1>
      </div>
    )
  }
}

export default App;
