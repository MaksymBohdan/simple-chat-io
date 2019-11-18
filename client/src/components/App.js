import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Users from './Users/UserContainer';
import chatInit from '../services/socket';
import './App.css';
import Main from './Main/Main';

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
        <Route path='/' exact render={() => <Main user={user} />} />

        <Route
          path='/users'
          render={props => <Users getAllUsers={client.getAllUsers} register={this.handleUserRegistration} {...props} />}
        />
      </Switch>
    );
  }
}

export default App;
