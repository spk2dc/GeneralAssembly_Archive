import React from 'react'

export default class Furniture extends React.Component {
    render() {
        return (
            <ul>
                <li>{this.props.chair}</li>
            </ul>
        )
    }
}