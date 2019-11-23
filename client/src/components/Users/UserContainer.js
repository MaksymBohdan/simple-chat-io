import React, { Component } from 'react';
import UserList from './UserList';

import chatInit from '../../services/socket';

class UserContainer extends Component {
  state = {
    allUsers: [],
    client: chatInit()
  };

  componentDidMount() {
    const { getAllUsers } = this.state.client;

    getAllUsers((err, allUsers) => {
      if (err) return this.setState({ allUsers: [] });

      this.setState({ allUsers });
    });
  }

  render() {
    const { allUsers } = this.state;
    const { fetchUser } = this.props;

    return (
      <div>
        <UserList allUsers={allUsers} fetchUser={fetchUser} />
      </div>
    );
  }
}

export default UserContainer;
