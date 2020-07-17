import React from 'react';
import Taco from './components/Taco';

class App extends React.Component {

  state = {
    url: 'http://taco-randomizer.herokuapp.com/random/?full-tack=true',
    taco: '',
    allKeys: []
  }

  searchTaco() {
    fetch(this.state.url)
      .then(response => {
        return response.json()
      })
      .then(json => {
        console.log(`App -> searchTaco -> json`, json)
        this.setState({
          taco: json,
          allKeys: Object.keys(json)
        })
      })
      .catch(err => {
        console.log(`App -> searchTaco -> err`, err)
      })
  }

  render() {
    return (
      <div>
        <h1>Random Taco</h1>
        <button onClick={() => this.searchTaco()}>Click for taco</button>
        {
          this.state.taco === ''
            ? <p>No Tacos Yet</p>
            : <Taco
              allKeys={this.state.allKeys}
              taco={this.state.taco} />
        }

      </div>
    )
  }
}

export default App;
