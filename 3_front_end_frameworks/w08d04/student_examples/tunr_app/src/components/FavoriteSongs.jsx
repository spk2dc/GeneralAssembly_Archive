import React, { Component } from 'react'

class FavoriteSongs extends Component {
  render () {
    return (
      <div>
      <h3>Favorites</h3>
      <table>
        <thead>
          <tr>
            <th>Song</th>
            <th>Artist</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
        {  this.props.songs.map((song, index )=> {
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
    )
  }
}

export default FavoriteSongs