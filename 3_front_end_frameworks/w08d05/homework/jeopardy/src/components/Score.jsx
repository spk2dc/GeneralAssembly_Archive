import React from 'react'

export default class Score extends React.Component {
    state = {
        score: 0
    }

    changeScore(event) {
        event.preventDefault()
        console.log(`Score -> changeScore -> event`, event.target.textContent)
        if (event.target.textContent === '+') {
            this.setState({
                score: this.state.score + 1
            })
        } else {
            this.setState({
                score: this.state.score - 1
            })
        }

    }

    render() {
        return (
            <div>
                <h2>Score: {this.state.score}</h2>
                <button onClick={(event) => this.changeScore(event)}>-</button>
                <button onClick={(event) => this.changeScore(event)}>+</button>
            </div>
        )
    }
}