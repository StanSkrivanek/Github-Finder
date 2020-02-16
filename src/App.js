import React, { Fragment, Component } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import axios from "axios";
import "./App.css";
import "./assets/fa/css/all.min.css";

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null // set state of alert to `null`
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
  // new clearUsers function to clear users from state
  clearUsers = () => this.setState({ users: [], loading: false });

  // set Alert function
  setAlert = (msg, type) => {
    // this.setState({ alert: { msg: msg, type: type } });
    this.setState({ alert: { msg, type } });
    setTimeout(() => {
      this.setState({ alert: null });
    }, 1000);
  };
  render() {
    // destructuring
    const { users, loading } = this.state;
    return (
      <div className="App">
        <Fragment>
          <Navbar />
          <div className="container">
            {/* add `Alert` component` */}
            <Alert alert={this.state.alert} />
            <Search
              searchUsers={this.searchUsers}
              clearUsers={this.clearUsers}
              showClear={users.length > 0 ? true : false}
              setAlert={this.setAlert}
            />
            <Users loading={loading} users={users} />
          </div>
        </Fragment>
      </div>
    );
  }
}

export default App;
