import React, { Component } from 'react';
import UsersView from './UserView';

class UserContainer extends Component {
  state = {
    allUsers: null
  };

  componentDidMount() {
    const { getAllUsers } = this.props;

    getAllUsers((err, allUsers) => {
      this.setState({
        allUsers
      });
    });
  }

  handleUserSelection = userName => {
    const { history, register } = this.props;

    register(userName);
    history.push('/');
  };

  render() {
    const { allUsers } = this.state;

    return (
      <ul>
        {allUsers &&
          allUsers.map(user => (
            <UsersView key={user.id} user={user} onClick={() => this.handleUserSelection(user.name)} />
          ))}
      </ul>
    );
  }
}

export default UserContainer;
