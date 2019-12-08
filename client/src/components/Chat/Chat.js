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
            <li key={message.name}>{message.event || message.message}</li>
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
