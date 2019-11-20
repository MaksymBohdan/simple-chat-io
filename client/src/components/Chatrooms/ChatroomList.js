import React, { Component } from 'react';
import ChatroomView from './ChatroomView';

import chatInit from '../../services/socket';

class ChatroomList extends Component {
  state = {
    chatrooms: []
  };

  componentDidMount() {
    const { getAllChatrooms } = chatInit();

    getAllChatrooms((err, chatrooms) => {
      console.log(chatrooms);

      this.setState({
        chatrooms
      });
    });
  }

  render() {
    const { chatrooms } = this.state;

    return (
      <>
        <ul>
          {chatrooms.map(room => (
            <li key={room.name}>
              <ChatroomView room={room} />
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default ChatroomList;
