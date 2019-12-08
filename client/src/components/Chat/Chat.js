import React, { Component } from 'react';
import { ChatWrapper, MessageArea } from './styles';

import chatInit from '../../services/socket';

class Chat extends Component {
  state = {
    chatHistory: [],
    message: ''
  };

  componentDidMount() {
    this.joinClientToChat();
  }

  joinClientToChat = () => {
    const { joinClientToChat } = chatInit();
    const {
      match: { params }
    } = this.props;

    joinClientToChat(params.roomname, err => {
      console.log('err :', err);
    });
  };

  onMessageChange = e => this.setState({ message: e.target.value });

  render() {
    const { history } = this.props;
    const { message, chatHistory } = this.state;

    return (
      <ChatWrapper>
        <h1>dialog</h1>
        <p onClick={() => history.push('/')}>back</p>
        <ul>
          {chatHistory.map(message => (
            <li key={message}>{message}</li>
          ))}
        </ul>
        <MessageArea rows='1' onChange={this.onMessageChange} value={message} />
        <button type='button' onClick={this.onMessageSend}>
          send message
        </button>
      </ChatWrapper>
    );
  }
}

export default Chat;
