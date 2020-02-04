import React, { Component } from "react";
import UserItem from "./UserItem";

class Users extends Component {
  state = {
    users: [
      {
        id: "1",
        login: "mojombo",
        avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
        html_url: "https://github.com/mojombo"
      },
      {
        id: "2",
        login: "defunkt",
        avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4",
        html_url: "https://github.com/defunkt"
      },
      {
        id: "3",
        login: "pjhyett",
        avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
        html_url: "https://github.com/pjhyett"
      }
    ]
  };
  render() {
    return (
      <div style={userStyle}>
        {this.state.users.map(user => (
          // console.log(user)
          // iterate thru `users` and for each user render `UserItem`. This component have properties `key` that will take users `id` number and `user`. Property (attribute) `user` with value `user` we will give access to all user object props (id, login ...)
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}
// another way how to add style to component (instead inline) ia store style in variable and pass this variable as value of `style` attribute
const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem"
};
export default Users;
