import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import MainLayout from './MainLayout/MainLayout';
import Users from './Users/UserContainer';
import ChatroomList from './Chatrooms/ChatroomList';
import Dialog from './Dialog/Dialog';

import chatInit from '../services/socket';

class App extends Component {
  state = {
    user: null,
    chatrooms: [],
    client: chatInit()
  };

  componentDidMount() {
    this.handleFetchAllChatrooms();
  }

  handleFetchChoosenUser = userName => {
    const { register } = this.state.client;
    const { history } = this.props;

    register(userName, (err, user) => {
      if (err) return this.setState({ user: null });

      this.setState({ user });

      history.push('/');
    });
  };

  handleFetchAllChatrooms = () => {
    const { getAllChatrooms } = chatInit();

    getAllChatrooms((err, chatrooms) => {
      if (err) return this.setState({ chatrooms: [] });

      this.setState({ chatrooms });
    });
  };

  render() {
    const { user, chatrooms } = this.state;

    return (
      <MainLayout user={user}>
        <Switch>
          <Route exact path='/' render={() => <ChatroomList chatrooms={chatrooms} />} />
          <Route exact path='/chatroom/:roomname' render={props => <Dialog {...props} />} />
        </Switch>
        <Route path='/users' render={props => <Users fetchUser={this.handleFetchChoosenUser} {...props} />} />
      </MainLayout>
    );
  }
}

export default App;
