import React from 'react';
import birdArr from './data.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      birdArr: birdArr,
      birdName: '',
      image: '',
      user: '',
      approved: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value })
  }

  handleSubmit(event) {
    this.setState({ [event.target.id]: event.target.value })
  }

  handleDelete(event) {
    this.setState({ [event.target.id]: event.target.value })
  }

  render() {
    return (
      <div>
        <h1>Bird Photo Contest</h1>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>User</th>
              <th>Approved</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.birdArr.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.birdName}</td>
                    <td><img src={item.image} /></td>
                    <td>{item.user}</td>
                    <td>{item.approved}</td>
                    <td>
                      <button onClick={() => this.handleDelete(index)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div >
    )
  }

}

export default App;
