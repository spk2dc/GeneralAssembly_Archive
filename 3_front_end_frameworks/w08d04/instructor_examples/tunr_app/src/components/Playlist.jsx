import React, { Component } from 'react'

import Song from './Song.jsx';

class PlayList extends Component {
  render() {
    return (
        <main>
        <div>
        <h3>Playlist 1</h3>
        <table>
            <thead>
            <tr>
                <th>Song</th>
                <th>Arist</th>
                <th>Time</th>
                <th>Loved</th>
                <th>Remove</th>
            </tr>
            </thead>
            <tbody>
            {this.props.playlist.map((song, index) => {
                return <Song
                    key={index}
                    index={ index } song={ song }
                    removeSong={ this.props.removeSong }/>
            })}
            </tbody>
        </table>
        </div>
    </main>
    )
  }
}

export default PlayList
