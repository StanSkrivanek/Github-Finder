import React, { useState, useContext } from "react";
// import PropTypes from "prop-types";
// bring the Context
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

const Search = () => {
  //  initialize Context
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const [text, setText] = useState("");

  const onSubmitEvent = e => {
    e.preventDefault();

    if (text === "") {
      alertContext.setAlert("Please enter some text", "light");
    } else {
      // Use Context
      githubContext.searchUsers(text);

      setText("");
    }
  };

  const onChangeEvent = e => {
    setText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmitEvent} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search Users..."
          value={text}
          onChange={onChangeEvent}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {/* if there is users show clear button */}
      {githubContext.users.length > 0 && (
        <button
          className="btn btn-light btn-block"
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

// Search.propTypes = {
//   // searchUsers: PropTypes.func.isRequired,
//   // clearUsers: PropTypes.func.isRequired,
//   // showClear: PropTypes.bool.isRequired,
//   // showAlert: PropTypes.func.isRequired
// };
export default Search;
