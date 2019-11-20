import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './Main/Main';
import Users from './Users/UserContainer';

import chatInit from '../services/socket';

class App extends Component {
  state = {
    user: null,
    isRegistrationInProcess: false,
    client: chatInit()
  };

  handleUserRegistration = userName => {
    const { register } = this.state.client;

    this.setState({
      isRegistrationInProcess: true
    });

    register(userName, (err, user) => {
      if (err) return this.setState({ user: null });

      this.setState({
        isRegistrationInProcess: false,
        user
      });
    });
  };

  render() {
    const { user, client } = this.state;

    return (
      <Switch>
        <Route
          exact
          path='/users'
          render={props => <Users getAllUsers={client.getAllUsers} register={this.handleUserRegistration} {...props} />}
        />

        <Route path='/' render={props => <Main user={user} {...props} />} />
      </Switch>
    );
  }
}

export default App;
