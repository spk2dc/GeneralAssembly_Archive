import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chair: "Grandma's Favorite Chair"
    }
  }

  render() {
    return (
      <div className='container'>
        <h1 className='shop-name'>Heirloom Furniture Restoration</h1>
      </div>
    )
  }
}

export default App;
