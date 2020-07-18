import React from 'react';
import Question from './components/Question'
import Answer from './components/Answer'

class App extends React.Component {
  state = {
    url: 'http://jservice.io/api/random',
    apiObj: ''
  }

  getQuestion() {
    fetch(this.state.url)
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(`App -> getQuestion -> data`, data)
        this.setState({
          apiObj: data[0]
        })
      })
      .catch(err => {
        console.log(`App -> getQuestion -> err`, err)
      })
  }

  render() {
    return (
      <div>
        <h1>Welcome to Jeopardy</h1>
        <button onClick={() => this.getQuestion()}>Random Trivia Question</button>
        {
          this.state.apiObj !== ''
            ? <Question
              apiObj={this.state.apiObj}
            />
            : ''
        }

        <Answer
          answer={this.state.apiObj.answer}
        />
      </div>
    )
  }
}

export default App;
