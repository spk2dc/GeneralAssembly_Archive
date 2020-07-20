import React from 'react';

let baseURL = 'http://localhost:3003'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      animals: []
    }
  }

  getAnimals() {
    fetch(baseURL + '/shelter')
      .then(data => {
        return data.json()
      })
      .then(parsedData => {
        console.log(parsedData)
      })
      .catch(err => console.log(err))
  }

  componentDidMount() {
    this.getAnimals()
  }

  render() {
    return (
      <div className='container'>
        <h1>Animal Shelter API</h1>
        <table>
          <tbody>
            {
              this.state.animals.map(val => {
                return (
                  <tr key={val._id} >
                    <td> {val.name}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default App;
