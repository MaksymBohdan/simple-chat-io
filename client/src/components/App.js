import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Logo from './Logo/Logo';
import Users from './Users/UserContainer';
import chatInit from '../services/socket';
import './App.css';

class App extends Component {
  state = {
    user: null,
    client: chatInit()
  };

  render() {
    const { user } = this.state;
    return (
      <Switch>
        <Route path='/' exact render={() => <Logo user={user} />} />
        <Route path='/auth' component={Users} />
      </Switch>
    );
  }
}

export default App;
