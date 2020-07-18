import React from 'react'

export default class Question extends React.Component {
    render() {
        return (
            <div>
                <h3>Points: {this.props.apiObj.value}</h3>
                <h3>Category: {this.props.apiObj.category.title}</h3>
                <h3>Question: </h3>
                <p>{this.props.apiObj.question}</p>
            </div>
        )
    }
}