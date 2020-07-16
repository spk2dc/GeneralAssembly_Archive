import React, { Component } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import playlist from './data.js'

console.table(playlist)

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      playlist: playlist
    }
  }


  render() {
    return (
      <div>
        <Header />
        <form>
          <label htmlFor="title">
            Song
            <input type="text" id="title" />
          </label>
          <label htmlFor="artist">
            Artist
            <input type="text" id="artist" />
          </label>
          <label htmlFor="time">
            Time
            <input type="text" id="time" />
          </label>
          <label>
            <input type="submit" />
          </label>
        </form>
        <main>
          <div>
            <h3>Playlist 1</h3>
            <table>
              <thead>
                <tr>
                  <th>Song</th>
                  <th>Arist</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                {this.state.playlist.map((song, index) => {
                  return (
                    <tr key={index}>
                      <td>{song.title}</td>
                      <td>{song.artist}</td>
                      <td>{song.time}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </main>
        <Footer />
      </div>
    )
  }
}

export default App;
