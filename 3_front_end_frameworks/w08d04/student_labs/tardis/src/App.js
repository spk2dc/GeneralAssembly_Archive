import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tardis: {
        name: 'Time and Relative Dimension in Space',
        caps: false,
      }
    }

    this.changeIt = this.changeIt.bind(this)
  }


  changeIt(text) {
    if (this.state.tardis.caps) {
      this.setState({
        tardis: {
          name: text.toLowerCase(),
          caps: false
        }
      })
    } else {
      this.setState({
        tardis: {
          name: text.toUpperCase(),
          caps: true
        }
      })
    }
  }


  render() {
    return (
      <div>
        <h3 onClick={() => this.changeIt(this.state.tardis.name)}>{this.state.tardis.name}</h3>
      </div>
    )
  }
}

export default App;
