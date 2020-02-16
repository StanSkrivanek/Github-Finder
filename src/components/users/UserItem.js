import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Refactored to functional component
const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  // properties are now destructured
  // BEFORE destructuring
  // const UserItem = (props) => {
  // const { login, avatar_url, html_url } = props.user;
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
        <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
          more
        </Link>
      </div>
    </div>
  );
};
// add propTypes
UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
