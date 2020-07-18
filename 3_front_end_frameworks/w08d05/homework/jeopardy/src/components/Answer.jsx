import React from 'react'

export default class Answer extends React.Component {
    state = {
        display: false
    }

    toggleAnswer() {
        this.setState({
            display: !this.state.display
        })
    }

    render() {
        return (
            <div className='section'>
                <h3>ANSWER: </h3>
                {
                    this.state.display
                        ? <div>
                            <button onClick={() => this.toggleAnswer()}>Hide</button>
                            <p id='answerText'>{this.props.answer}</p>
                        </div>
                        : <div>
                            <button onClick={() => this.toggleAnswer()}>Show</button>
                        </div>
                }

            </div>
        )
    }
}