import React from 'react'

export default class ListItem extends React.Component {
    render() {
        return (
            <li>
                <span>{this.props.piece} </span>
                {
                    this.props.recommendationMade
                        ? <button>No Recommendation</button>
                        : <button onClick={() => this.props.restore(this.props.key)}>Recommendation</button>
                }
            </li>
        )
    }
}