import React, { Fragment, Component } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import axios from "axios";
import PropTypes from "prop-types";
import "./App.css";
import "./assets/fa/css/all.min.css";

class App extends Component {
  state = {
    users: [],
    loading: false
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired
  };

  // search Github users
  searchUsers = async text => {
    this.setState({ loading: true });
    const res = await axios.get(
      // add query `q=${text}` to path (https://developer.github.com/v3/search/ - Parameters QUERY)
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, loading: false });
  };

  render() {
    return (
      <div className="App">
        <Fragment>
          <Navbar />
          <div className="container">
            {/* add `searchUsers` prop */}
            <Search searchUsers={this.searchUsers} />
            <Users loading={this.state.loading} users={this.state.users} />
          </div>
        </Fragment>
      </div>
    );
  }
}

export default App;
