import React from 'react'
import Square from './Square.jsx'

class Board extends React.Component {
  render() {
    return (
        <div className="board">
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
        </div>
    )
  }
}

export default Board