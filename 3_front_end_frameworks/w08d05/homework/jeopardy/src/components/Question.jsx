import React from 'react'

export default class Question extends React.Component {
    render() {
        return (
            <div>
                <h3>POINTS: {this.props.apiObj.value}</h3>
                <h3>CATEGORY: {this.props.apiObj.category.title}</h3>
                <h3>QUESTION: </h3>
                <p id='questionText'>{this.props.apiObj.question}</p>
            </div>
        )
    }
}