import React from 'react';
import NewForm from './components/NewForm';

let baseURL = 'http://localhost:3003'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      animals: []
    }
  }

  getAnimals = () => {
    fetch(baseURL + '/shelter')
      .then(data => {
        return data.json()
      })
      .then(parsedData => {
        console.log(parsedData)
        let newArr = [...this.state.animals, ...parsedData]
        this.setState({
          animals: newArr
        })
      })
      .catch(err => console.log(err))
  }

  addAnimal = (newAnimal) => {
    const copyAnimal = [...this.state.animals];
    console.log(`App -> addAnimal -> copyAnimal`, copyAnimal)
    copyAnimal.push(newAnimal);
    this.setState({
      animals: copyAnimal,
    });
  }

  componentDidMount() {
    this.getAnimals()
  }

  render() {
    return (
      <div className='container'>
        <h1>Animal Shelter API</h1>
        <NewForm baseURL={baseURL} addAnimal={this.addAnimal} />
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
