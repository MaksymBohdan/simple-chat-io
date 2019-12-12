import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import MainLayout from './MainLayout/MainLayout';
import Users from './Users/UserContainer';
import ChatroomsList from './Chatrooms/ChatroomsList';
import Chat from './Chat/Chat';

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

  handleClientRegistration = userName => {
    const { history } = this.props;

    this.state.client.registerClient(userName, (err, user) => {
      if (err) return this.setState({ user: null });

      this.setState({ user });

      history.push('/');
    });
  };

  handleFetchAllChatrooms = () => {
    this.state.client.getAllChatrooms((err, chatrooms) => {
      if (err) return this.setState({ chatrooms: [] });

      this.setState({ chatrooms });
    });
  };

  render() {
    const { user, chatrooms, client } = this.state;

    return (
      <MainLayout user={user}>
        <Switch>
          <Route exact path='/' render={() => <ChatroomsList chatrooms={chatrooms} />} />
          <Route
            exact
            path='/chatroom/:roomname'
            render={props => (
              <Chat
                {...props}
                user={user}
                joinClientToChat={client.joinClientToChat}
                leaveClientFromChat={client.leaveClientFromChat}
                handleReceiveMessage={client.handleReceiveMessage}
                unhandleReceiveMessage={client.unhandleReceiveMessage}
                handleSendMessage={client.handleSendMessage}
              />
            )}
          />
        </Switch>
        <Route
          path='/users'
          render={props => (
            <Users
              handleClientRegistration={this.handleClientRegistration}
              getAllUsers={client.getAllUsers}
              {...props}
            />
          )}
        />
      </MainLayout>
    );
  }
}

export default App;
