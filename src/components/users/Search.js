import React, { Component } from "react";

export class Search extends Component {
  // Seat state
  state = {
    text: ""
  };
  onChangeHandleEvent = e => {
    // this.setState({ text: e.target.value });
    // If we have more fields as email, text etc we can use a small trick. We will set state to whatever value of name is
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitHandleEvent = e => {
    // in arrow function we don't have to use `e.preventDefault` as AF works differently. We also omit `this.onSubmitHandleEvent.bind(this)
    // e.preventDefault();
    console.log(this.state.text);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandleEvent} className="form">
          <input
            type="text"
            name="text"
            placeholder="Search Users..."
            // set what will be value of input field
            value={this.state.text}
            // we have to apply onChange event to be able to write into input field and update `state`
            onChange={this.onChangeHandleEvent}
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
