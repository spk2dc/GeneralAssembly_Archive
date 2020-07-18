import React from 'react';
import Question from './components/Question'
import Answer from './components/Answer'
import Score from './components/Score'

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
      <div className='container'>
        <h1>Welcome to Jeopardy</h1>
        <Score
          value={this.state.apiObj.value}
        />
        <br />

        <div className='section'>
          <button onClick={() => this.getQuestion()}>Random Trivia Question</button>
          {
            this.state.apiObj !== ''
              ? <Question
                apiObj={this.state.apiObj}
              />
              : ''
          }
        </div>

        <Answer
          answer={this.state.apiObj.answer}
        />
      </div>
    )
  }
}

export default App;
