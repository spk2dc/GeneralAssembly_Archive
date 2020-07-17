import React from 'react';
import DivOne from './components/DivOne';
import DivTwo from './components/DivTwo';
import DivThree from './components/DivThree';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tardis: {
        name: 'Time and Relative Dimension in Space',
        caps: false,
      }
    }

    this.changeIt = this.changeIt
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
        <DivOne
          state={this.state}
          changeIt={this.changeIt} />
      </div>
    )
  }
}

export default App;
