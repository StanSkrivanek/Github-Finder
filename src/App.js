import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import User from "./components/users/User";
import Search from "./components/users/Search";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import axios from "axios";
import GithubState from "./context/github/GithubState";

import "./App.css";
import "./assets/fa/css/all.min.css";

const App = () => {
  // const [users, setUsers] = useState([]);
  // const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  const getUserRepos = async username => {
    // this.setState({ loading: true });
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setRepos(res.data);
    setLoading(false);
  };

  const showAlert = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => setAlert(null), 1000);
  };

  return (
    // wrap whole App in GithubState
    <GithubState>
      <Router>
        <div className="App">
          <Fragment>
            <Navbar />
            <div className="container">
              <Alert alert={alert} />
              <Switch>
                <Route
                  exact
                  path="/"
                  render={props => (
                    <Fragment>
                      <Search
                        // searchUsers={searchUsers}
                        // clearUsers={clearUsers}
                        // showClear={users.length > 0 ? true : false}
                        showAlert={showAlert}
                      />
                      <Users />
                    </Fragment>
                  )}
                />
                <Route exact path="/about" component={About} />
                <Route
                  exact
                  path="/user/:login"
                  render={props => (
                    <User
                      {...props}
                      // getUser={getUser}
                      getUserRepos={getUserRepos}
                      // user={user}
                      repos={repos}
                      // loading={loading}
                    />
                  )}
                />
              </Switch>
            </div>
          </Fragment>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
