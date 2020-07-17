import React from 'react'

export default class Furniture extends React.Component {
    render() {
        return (
            <ul>
                <li>{this.props.chair}</li>
                {
                    this.props.recommendationMade
                        ? <button>No Recommendation</button>
                        : <button onClick={() => this.props.restore()}>Recommendation</button>
                }
            </ul>
        )
    }
}