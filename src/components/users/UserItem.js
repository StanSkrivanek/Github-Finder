import React, { Component } from "react";

class UserItem extends Component {
  // We have deleted constructor an using only state declaration
  // and also deleted state
  render() {
    //   we have also destructured properties from props object. Now we don't need to use this.state where were originally used
    const { login, avatar_url, html_url } = this.props.user;
    // this.state deleted (we have no state anymore ). Instead using props (`this.props.user`) passed from Users.js
    return (
      <div className="card text-center">
        <img
          src={avatar_url}
          alt="avatar"
          className="round-img"
          style={{ width: "60px" }}
        />
        <h3>{login}</h3>
        <div>
          <a href={html_url} className="btn btn-dark btn-sm my-1">
            more
          </a>
        </div>
      </div>
    );
  }
}

export default UserItem;
