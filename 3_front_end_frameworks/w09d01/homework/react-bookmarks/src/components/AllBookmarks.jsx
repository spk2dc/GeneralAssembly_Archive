import React from "react";
import Bookmark from "./Bookmark";

export default class AllBookmarks extends React.Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>URL</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {this.props.allBookmarks.map((val, i) => {
            return (
              <Bookmark
                key={i}
                baseURL={this.props.baseURL}
                index={i}
                bookmark={val}
                deleteBookmark={this.props.deleteBookmark}
              />
            );
          })}
        </tbody>
      </table>
    );
  }
}
