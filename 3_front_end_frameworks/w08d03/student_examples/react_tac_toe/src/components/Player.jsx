import React from 'react'

class Player extends React.Component {
    render() {
        return (
            <div>
                <h2>Player {this.props.whichPlayer} </h2>
                <h3>Wins: </h3>
            </div>
        )
    }
}

export default Player
