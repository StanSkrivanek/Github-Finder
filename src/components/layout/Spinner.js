import React, { Fragment } from "react";
import spinner from "../../assets/img/spinner.gif";

const Spinner = () => {
  return (
    <Fragment>
      <img
        src={spinner}
        alt="Loading..."
        style={{ display: "block", width: "200px", margin: "auto" }}
      />
    </Fragment>
  );
};

export default Spinner;
