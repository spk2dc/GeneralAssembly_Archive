import React from "react";

export default class Bookmark extends React.Component {
  render() {
    return (
      <tr key={this.props.index}>
        <td>{this.props.title}</td>
        <td>{this.props.url}</td>
        <td>X</td>
      </tr>
    );
  }
}
