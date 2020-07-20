import React from 'react';

let baseUrl = 'http://localhost:3003';

class App extends React.Component {
  state = {
    holidays: [],
  }

  getHolidays() {
    fetch(baseUrl + '/holidays').then(res => {
      return res.json();
    }).then(data => {
      this.setState({
        holidays: data,
      });
    });
  }

  componentDidMount() {
    this.getHolidays();
  }

  render() {
    return (
      <div>
        <h1>Holidays! Celebrate!</h1>
        <table>
          <tbody>
            {
              this.state.holidays.map(holiday => {
                return (
                  <tr key={ holiday._id }>
                    <td>{ holiday.name }</td>
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
