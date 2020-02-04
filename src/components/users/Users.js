import React, { Component } from "react";
import UserItem from "./UserItem";

class Users extends Component {
  render() {
    return (
      <div style={userStyle}>
        {this.props.users.map(user => (
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
