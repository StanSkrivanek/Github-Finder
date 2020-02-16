import React, { useState } from "react";
import PropTypes from "prop-types";

// destructuring ALL props we need for this component
const Search = ({ searchUsers, showClear, clearUsers, showAlert }) => {
  // destructuring
  const [text, setText] = useState("");

  // here we store function in `const`
  const onSubmitEvent = e => {
    e.preventDefault();
    // change to `text` only
    if (text === "") {
      showAlert("Please enter some text", "light");
    } else {
      searchUsers(text);
      // this.setState({ text: "" }); before
      setText(""); // now
    }
  };
  // here we store function
  const onChangeEvent = e => {
    // use setText
    setText(e.target.value);
  };

  return (
    <div>
      {/* no `this` (we are getting values from `setState`)*/}
      <form onSubmit={onSubmitEvent} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search Users..."
          // change to `text` only
          value={text}
          // no `this`
          onChange={onChangeEvent}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {showClear && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};
// Moving propTypes after function component
Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  showAlert: PropTypes.func.isRequired
};
export default Search;
