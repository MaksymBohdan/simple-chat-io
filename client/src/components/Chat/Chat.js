import React, { Component } from 'react';
import { ChatWrapper, MessageArea } from './styles';

class Chat extends Component {
  state = {
    chatHistory: [],
    message: ''
  };

  componentDidMount() {
    this.joinClientToChat();
    this.handleReceiveMessage();
  }

  handleReceiveMessage = () => {
    this.props.handleReceiveMessage(data => {
      console.log('messge received');
      this.setState({
        chatHistory: [...this.state.chatHistory, data]
      });
    });
  };

  joinClientToChat = () => {
    const {
      match: { params },
      joinClientToChat
    } = this.props;

    joinClientToChat(params.roomname, (err, chatHistory) => {
      if (err) return console.log('err :', err);

      console.log('joinClientToChat', chatHistory);

      this.setState({
        chatHistory
      });
    });
  };

  leaveClientFromChat = () => {
    const {
      match: { params },
      history,
      leaveClientFromChat
    } = this.props;

    leaveClientFromChat(params.roomname, err => {
      if (err) return console.log('err', err);

      console.log('leaveClientFromChat');

      history.push('/');
    });
  };

  componentWillUnmount() {
    this.props.unhandleReceiveMessage();
  }

  onMessageChange = e => this.setState({ message: e.target.value });

  onMessageSend = () => {
    const { message } = this.state;
    const {
      handleSendMessage,
      match: { params }
    } = this.props;
    if (!message) return;

    handleSendMessage({ message, roomname: params.roomname }, err => {
      if (err) return console.log('err', err);
      console.log('client');
      this.setState({ message: '' });
    });
  };

  render() {
    const { message, chatHistory } = this.state;

    return (
      <ChatWrapper>
        <h1>dialog</h1>
        <p onClick={this.leaveClientFromChat}>back</p>
        <ul>
          {chatHistory.map((message, idx) => (
            <li key={idx}>{message.event || message.message}</li>
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
