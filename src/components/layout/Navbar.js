import React from "react";
import PropTypes from "prop-types";

// Refactored to functional component
const Navbar = props => {
  // console.log(props);
  return (
    <nav className="navbar bg-primary">
      <h1>
        {/* no need keyword `this` as this component is now function */}
        <i className={props.icon}></i> {props.title}
      </h1>
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
