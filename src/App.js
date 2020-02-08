import React, { Fragment, Component } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import axios from "axios";
import "./App.css";
import "./assets/fa/css/all.min.css";

class App extends Component {
  state = {
    users: [],
    loading: false
  };

  // ASYNC Version
  // async componentDidMount() {
  //   // console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET);
  //   // change State on mount
  //   this.setState({ loading: true }); // show loading GIF when data are loading

  //   // console.log(123);
  //   // GET ASYNC data from github API using `axios`
  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );

  //   this.setState({ users: res.data, loading: false });
  // }

  // search Github users
  searchUsers = async text => {
    const res = await axios.get(
      // add query `q=${text}` to path
      `https://api.github.com/search/users?q=${text}client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
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
