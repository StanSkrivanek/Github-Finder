import React, { Component } from "react";
import PropTypes from "prop-types";

export class Search extends Component {
  state = {
    text: ""
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
  };

  onSubmitEvent = e => {
    // set condition if search field is submitted empty (no string to search)
    e.preventDefault();
    if (this.state.text === "") {
      // function setAlert take 2 parameters (1.text of alert to be shown 2. type (based on CSS) as danger, success etc. )
      this.props.setAlert("Please enter some text", "light");
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: "" });
    }
  };

  onChangeEvent = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    // to shorting code we can use destructuring
    const { showClear, clearUsers } = this.props;

    return (
      <div>
        <form onSubmit={this.onSubmitEvent} className="form">
          <input
            type="text"
            name="text" // name we call with [e.target.name]
            placeholder="Search Users..."
            value={this.state.text}
            onChange={this.onChangeEvent}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>
        {showClear && ( //this.props.showClear
          <button
            className="btn btn-light btn-block"
            onClick={clearUsers} // this.props.clearUsers
          >
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
