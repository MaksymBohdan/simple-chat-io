import React, { Component, createRef } from 'react';
import UserList from './UserList';

class UserContainer extends Component {
  state = {
    allUsers: []
  };

  backdropRef = createRef();

  componentDidMount() {
    this.props.getAllUsers((err, allUsers) => {
      if (err) return this.setState({ allUsers: [] });

      this.setState({ allUsers });
    });

    window.addEventListener('click', this.handleBackdropCloseOnClick);
    window.addEventListener('keyup', this.handleBackdropCloseOnButton);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleBackdropCloseOnClick);
    window.removeEventListener('keyup', this.handleBackdropCloseOnButton);
  }

  handleBackdropCloseOnClick = e => {
    if (!this.backdropRef.current.contains(e.target) && e.target.tagName === 'DIV') {
      return this.props.history.push('/');
    }
  };

  handleBackdropCloseOnButton = e => e.keyCode === 27 && this.props.history.push('/');

  render() {
    const { allUsers } = this.state;
    const { handleClientRegistration, history } = this.props;

    return (
      <div>
        <UserList
          allUsers={allUsers}
          handleClientRegistration={handleClientRegistration}
          history={history}
          backdropRef={this.backdropRef}
        />
      </div>
    );
  }
}

export default UserContainer;
