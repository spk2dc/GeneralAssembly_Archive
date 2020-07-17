import React from 'react';
import Furniture from './components/Furniture'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      furniture: [
        {
          piece: "Grandma's Favorite Chair",
          recommendationMade: false,
          id: 1
        },
        {
          piece: 'Grand Armoire',
          recommendationMade: false,
          id: 2
        },
        {
          piece: 'Fainting Couch',
          recommendationMade: false,
          id: 3
        },
        {
          piece: 'Fabergé Egg',
          recommendationMade: false,
          id: 4
        }
      ]
    }
  }

  restore(index) {
    this.state.furniture[index].piece = `Paint ${this.state.piece} white`
    

    this.setState({
      furniture: this.state.furniture
    })
  }

  render() {
    return (
      <div className='container'>
        <h1 className='shop-name'>Heirloom Furniture Restoration</h1>
        <Furniture
          furniture={this.state.furniture}
          restore={() => this.restore()} />
      </div>
    )
  }
}

export default App;
