import React from 'react';

import NewForm from './components/NewForm';

let baseUrl = 'http://localhost:3003';

class App extends React.Component {
  state = {
    holidays: [],
  }

  getHolidays = () => {
    fetch(baseUrl + '/holidays').then(res => {
      return res.json();
    }).then(data => {
      this.setState({
        holidays: data,
      });
    });
  }

  addHoliday = (newHoliday) => {
    const copyHolidays = [...this.state.holidays];
    copyHolidays.push(newHoliday);
    this.setState({
      holidays: copyHolidays,
    });
  }

  deleteHoliday = (id) => {
    fetch(baseUrl + '/holidays/' + id, {
      method: 'DELETE'
    }).then(response => {
      const findIndex = this.state.holidays.findIndex(holiday => holiday._id === id)
      const copyHolidays = [...this.state.holidays]
      copyHolidays.splice(findIndex, 1)
      this.setState({ holidays: copyHolidays })
    })
  }

  componentDidMount() {
    this.getHolidays();
  }

  render() {
    return (
      <div>
        <h1>Holidays! Celebrate!</h1>
        <NewForm baseUrl={baseUrl} addHoliday={this.addHoliday} />
        <table>
          <tbody>
            {this.state.holidays.map(holiday => {
              return (
                <tr key={holiday._id} >
                  <td> {holiday.name}</td>
                  <td onClick={() => this.deleteHoliday(holiday._id)}>X</td>
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
