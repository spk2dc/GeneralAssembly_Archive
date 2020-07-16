import React, { Component } from 'react';

class Song extends Component {
    state = {
        love: false,
    }

    toggleLove() {
        this.setState({
            love: !this.state.love,
        });
    }

    render() {
        return (
            <tr>
                <td onClick={ () => this.toggleLove() }>{this.props.song.title}</td>
                <td>{this.props.song.artist}</td>
                <td>{this.props.song.time}</td>
                { this.state.love ? <td>&hearts;</td> : <td></td> }
                <td>
                <button onClick = {() => this.props.removeSong(this.props.index)}>Delete</button>
                </td>
            </tr>
        )
    }
}

export default Song;