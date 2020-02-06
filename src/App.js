import React, { Fragment, Component } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import axios from "axios";
import "./App.css";
import "./assets/fa/css/all.min.css";

class App extends Component {
  // Standard Version
  // componentDidMount() {
  //   // console.log(123);
  //   // GET data from github API using `axios`
  //   axios
  //     .get("https://api.github.com/users")
  //     .then(res => console.log(res.data));
  // }

  // add STATE
  state = {
    users: [],
    loading: false
  };

  // ASYNC Version
  async componentDidMount() {
    // console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET);
    // change State on mount
    this.setState({ loading: true }); // show loading GIF when data are loading

    // console.log(123);
    // GET ASYNC data from github API using `axios`
    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    // console.log(res.data);
    // show data when are ready and stop showing loading GIF
    this.setState({ users: res.data, loading: false });
  }
  render() {
    return (
      <div className="App">
        <Fragment>
          <Navbar />
          <div className="container">
            <Search />
            <Users loading={this.state.loading} users={this.state.users} />
          </div>
        </Fragment>
      </div>
    );
  }
}

export default App;
