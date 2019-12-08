import React, { Component } from 'react';
import UserList from './UserList';

class UserContainer extends Component {
  state = {
    allUsers: []
  };

  componentDidMount() {
    this.props.getAllUsers((err, allUsers) => {
      if (err) return this.setState({ allUsers: [] });

      this.setState({ allUsers });
    });
  }

  render() {
    const { allUsers } = this.state;
    const { handleClientRegistration } = this.props;

    return (
      <div>
        <UserList allUsers={allUsers} handleClientRegistration={handleClientRegistration} />
      </div>
    );
  }
}

export default UserContainer;
