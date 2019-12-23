import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import ChatView from './ChatView';
import { ChatroomListTitle } from '../Chatrooms/styles';

class ChatContainer extends Component {
  state = {
    chatHistory: [],
    message: ''
  };

  messagesEndRef = React.createRef();

  componentDidMount() {
    this.joinClientToChat();
    this.handleReceiveMessage();
    window.addEventListener('keyup', this.onPressEnter);
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom = () => {
    this.messagesEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
  };

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
      joinClientToChat,
      getChatroomName
    } = this.props;

    getChatroomName(params.roomname);

    joinClientToChat(params.roomname, (err, chatHistory) => {
      if (err) return console.log('err :', err);

      this.setState({ chatHistory });
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

      history.push('/');
    });
  };

  componentWillUnmount() {
    this.props.unhandleReceiveMessage();
    window.removeEventListener('keyup', this.onPressEnter);
  }

  onMessageChange = e => this.setState({ message: e.target.value });

  onPressEnter = e => {
    if (JSON.stringify(this.state.message) === JSON.stringify('\n')) {
      return this.setState({ message: '' });
    }

    return e.keyCode === 13 && this.onMessageSend();
  };

  onMessageSend = () => {
    const { message } = this.state;
    const {
      handleSendMessage,
      match: { params },
      user
    } = this.props;

    if (!message) return;

    handleSendMessage({ message, roomname: params.roomname, ...user }, err => {
      if (err) return console.log('err', err);

      this.setState({ message: '' });
    });
  };

  isOwnMessage = item => Boolean(item.message && item.id === this.props.user.id);

  render() {
    const { message, chatHistory } = this.state;
    const { roomname, user } = this.props;

    return (
      <>
        {!user && <Redirect to='/' />}
        <ChatroomListTitle>{roomname}</ChatroomListTitle>
        <ChatView
          leaveClientFromChat={this.leaveClientFromChat}
          isOwnMessage={this.isOwnMessage}
          message={message}
          chatHistory={chatHistory}
          onMessageSend={this.onMessageSend}
          onMessageChange={this.onMessageChange}
          messagesEndRef={this.messagesEndRef}
        />
      </>
    );
  }
}

export default ChatContainer;
