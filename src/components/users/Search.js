import React, { Component } from "react";
import PropTypes from "prop-types";

export class Search extends Component {
  // Seat state
  state = {
    text: ""
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired
  };

  onChangeEvent = e => {
    // this.setState({ text: e.target.value });
    // If we have more INPUT fields as email, text etc we can use a small trick. We will set state to whatever value of name is
    this.setState({ [e.target.name]: e.target.value });
  };

  // function called on submit
  onSubmitEvent = e => {
    //  We can omit binding `this` with `this.onSubmitHandleEvent.bind(this) as AF works differently with `this`.
    e.preventDefault();
    //  here we call props from Search component that is set in `App.js`
    this.props.searchUsers(this.state.text);
    this.setState({ text: "" });
  };

  render() {
    return (
      <div>
        {/* when we submit we call `onSubmitEvent` function*/}
        <form onSubmit={this.onSubmitEvent} className="form">
          <input
            type="text"
            name="text" // name we call with [e.target.name]
            placeholder="Search Users..."
            // set what will be value of input field
            value={this.state.text}
            // we have to apply onChange event to be able to write into input field and update `state`
            onChange={this.onChangeEvent}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>
      </div>
    );
  }
}

export default Search;
