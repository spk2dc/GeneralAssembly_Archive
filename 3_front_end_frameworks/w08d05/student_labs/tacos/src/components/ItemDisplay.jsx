import React from 'react';

export default class ItemDisplay extends React.Component {
    render() {
        return (
            <li>
                <h3>{this.props.name.toUpperCase()}: {this.props.item.name}</h3>
                <p>{this.props.item.recipe}</p>
            </li>
        )
    }
}

