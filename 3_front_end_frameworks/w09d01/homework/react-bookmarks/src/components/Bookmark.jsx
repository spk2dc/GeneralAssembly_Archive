import React from "react";

export default class Bookmark extends React.Component {
  render() {
    return (
      <tr key={this.props.index}>
        <td>{this.props.title}</td>
        <td>
          <a href={this.props.url} target='_blank'>
            {this.props.url}
          </a>
        </td>
        <td>X</td>
      </tr>
    );
  }
}
