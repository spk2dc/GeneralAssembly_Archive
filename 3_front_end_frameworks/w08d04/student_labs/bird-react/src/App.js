import React from 'react';
import Form from './components/Form';
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
    this.inputApproval = this.inputApproval.bind(this)
    this.changeApproval = this.changeApproval.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleChange(event) {
    // console.log(`App -> handleChange -> event.target.value`, event.target.value)
    this.setState({ [event.target.id]: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log(this.state.approved)
    const newItem = {
      birdName: this.state.birdName,
      image: this.state.image,
      user: this.state.user,
      approved: this.state.approved
    }

    const updatedArr = [...this.state.birdArr, newItem]

    this.setState({
      birdArr: updatedArr,
      birdName: '',
      image: '',
      user: '',
      approved: false
    })
  }

  inputApproval(event) {
    console.log(`App -> inputApproval -> event.target.checked`, event.target.checked)
    this.setState({ approved: event.target.checked })
  }

  changeApproval(index) {
    const newArr = [...this.state.birdArr]
    newArr[index].approved = !newArr[index].approved
    // console.log(`App -> changeApproval -> birdArr`, birdArr[index])
    this.setState({birdArr: newArr})
  }

  handleDelete(index) {
    let updatedArr = this.state.birdArr.filter((item, i) => i !== index)
    this.setState({ birdArr: updatedArr })
  }

  render() {
    return (
      <div>
        <h1>Bird Photo Contest</h1>

        <Form
          state={this.state}
          handleChange={this.handleChange}
          inputApproval={this.inputApproval}
          handleSubmit={this.handleSubmit}/>

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
                    <td>
                      {
                        item.approved
                          ? <button onClick={() => this.changeApproval(index)}>
                            Unapprove
                            </button>
                          : <button onClick={() => this.changeApproval(index)}>
                            Approve
                            </button>

                      }
                    </td>
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
