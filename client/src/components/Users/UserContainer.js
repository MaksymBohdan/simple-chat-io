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
    const { handleClientRegistration } = this.props;

    return (
      <div>
        <UserList allUsers={allUsers} handleClientRegistration={handleClientRegistration} />
      </div>
    );
  }
}

export default UserContainer;
