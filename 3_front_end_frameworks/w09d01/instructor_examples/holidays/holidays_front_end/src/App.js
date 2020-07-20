import React from 'react';

let baseUrl = 'http://localhost:3003';

fetch(baseUrl + '/holidays').then(res => {
  return res.json();
}).then(data => {
  console.log(data);
});

class App extends React.Component {
  state = {
    holidays: [],
  }

  render() {
    return (
      <div>
        <h1>Holidays! Celebrate!</h1>
      </div>
    )
  }
}

export default App;
