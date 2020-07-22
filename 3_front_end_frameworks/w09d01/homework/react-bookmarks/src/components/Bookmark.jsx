import React from "react";

export default class Bookmark extends React.Component {
  render() {
    return (
      <tr key={this.props.index} id={this.props.bookmark._id}>
        <td>{this.props.bookmark.title}</td>
        <td>
          <a href={this.props.bookmark.url} target='_blank'>
            {this.props.bookmark.url}
          </a>
        </td>
        <td onClick={() => this.props.deleteBookmark()}>X</td>
      </tr>
    );
  }
}
