import React from 'react'

export default class Score extends React.Component {
    state = {
        score: 0
    }

    changeScore(event) {
        event.preventDefault()
        // console.log(`Score -> changeScore -> event`, event.target.textContent)

        //if there is no question so no property value available, set default value to 0. otherwise set to current property value passed in. needed to prevent errors clicking button when.
        let tempVal = 0
        isNaN(this.props.value)
            ? tempVal = 0
            : tempVal = this.props.value

        if (event.target.textContent === '+') {
            this.setState({
                score: this.state.score + tempVal
            })
        } else {
            this.setState({
                score: this.state.score - tempVal
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