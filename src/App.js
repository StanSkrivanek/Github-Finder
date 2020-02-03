import React, { Fragment, Component } from "react";
import Navbar from "./components/layout/Navbar";
import UserItem from "./components/users/UserItem";
import "./App.css";
import "./assets/fa/css/all.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Fragment>
          {/* this component will get default props (Navbar.js)  */}
          <Navbar />

          {/* or we can ad them directly */}
          {/* <Navbar title="Github Finder" icon="fab fa-github" /> */}
          <UserItem />
        </Fragment>
      </div>
    );
  }
}

export default App;
