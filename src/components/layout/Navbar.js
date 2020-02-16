import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Refactored to functional component
const Navbar = props => {
  // console.log(props);
  return (
    <nav className="navbar bg-primary">
      <h1>
        {/* no need keyword `this` as this component is now function */}
        <i className={props.icon}></i> {props.title}
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};
// set default `props` OUTSIDE func. component
Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github"
};
// set default `types` OUTSIDE func. component
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};
export default Navbar;
