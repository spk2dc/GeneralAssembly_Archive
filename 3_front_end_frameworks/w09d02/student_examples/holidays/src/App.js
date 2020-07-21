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

  toggleCelebrated = (holiday) => {
    fetch(baseUrl + '/holidays/' + holiday._id, {
      method: 'PUT',
      body: JSON.stringify({ celebrated: !holiday.celebrated }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(resJson => {
        const copyHolidays = [...this.state.holidays]
        const findIndex = this.state.holidays.findIndex(holiday => holiday._id === resJson._id)
        copyHolidays[findIndex].celebrated = resJson.celebrated
        this.setState({ holidays: copyHolidays })
      })
  }

  addLike = (holiday) => {
    fetch(baseUrl + '/holidays/' + holiday._id, {
      method: 'PUT',
      body: JSON.stringify({ likes: holiday.likes + 1 }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(resJson => {
        const copyHolidays = [...this.state.holidays]
        const findIndex = this.state.holidays.findIndex(holiday => holiday._id === resJson._id)
        copyHolidays[findIndex].likes = resJson.likes
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
                  <td
                    onDoubleClick={() => this.toggleCelebrated(holiday)}
                    className={holiday.celebrated
                      ? 'celebrated'
                      :
                      null}
                  >{holiday.name} Day</td>
                  <td onClick={() => this.addLike(holiday)}>{holiday.likes} Likes</td>
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
