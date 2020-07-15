import React from 'react'
import Header from './components/Header.jsx'
import Player from './components/Player'
import Board from './components/Board'

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Player whichPlayer='X'/>
        <Player whichPlayer='O'/>
        <Board />
      </div>
    )
  }
}

export default App