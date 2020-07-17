import React, { Component } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Playlist from './components/Playlist.jsx'
import FavoriteSongs from './components/FavoriteSongs.jsx'
import playlist from './data.js'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      playlist: playlist,
      title: '',
      artist: '',
      time: '0:00',
      lovedSongs: []
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.addLovedSong = this.addLovedSong.bind(this)
    this.removeSong = this.removeSong.bind(this)
  }

  handleChange (event) {
    this.setState({ [event.target.id]: event.target.value })
  }

  handleSubmit (event) {
    event.preventDefault()

    const newSong = {
      title: this.state.title,
      artist: this.state.artist,
      time: this.state.time
    }

    const updatedSongs = [ ...this.state.playlist, newSong ]

    this.setState({
      playlist: updatedSongs,
      title: '',
      artist: '',
      time: '0:00'
    })
  }

  addLovedSong(song) {
    this.setState({lovedSongs: [song, ...this.state.lovedSongs]})
  }

  removeSong (index) {
    const playlist = this.state.playlist
    let updatedPlaylist = playlist.filter((song, i) => i !== index)

    this.setState({
      playlist: updatedPlaylist,
    })
  }


  render() {
    return (
      <div>
        <Header />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">
            Song
            <input type="text" id="title" value={this.state.title} onChange={this.handleChange} />
          </label>
          <label htmlFor="artist">
            Artist
            <input type="text" id="artist" value={this.state.artist} onChange={this.handleChange} />
          </label>
          <label htmlFor="time">
            Time
            <input type="text" id="time" value={this.state.time} onChange={this.handleChange} />
          </label>
          <label>
            <input type="submit" />
          </label>
        </form>
        <main>
        <Playlist
          playlist={ this.state.playlist }
          addLovedSong={ this.addLovedSong }
          removeSong={ this.removeSong } />
        <FavoriteSongs songs={this.state.lovedSongs} />
        </main>
        <Footer />
      </div>
    )
  }
}

export default App;
