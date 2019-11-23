import React, { Component } from 'react';
import { ChatWrapper } from './styles';
import styled from 'styled-components';

const MessageArea = styled.textarea`
  width: 100%;
  height: 70px;
  background-color: rgb(255, 255, 255);
  position: absolute;
  bottom: 0;
  resize: none;
  outline: none;
  box-sizing: border-box;
  ${'' /* overflow: hidden; */}
`;

class Chat extends Component {
  render() {
    const { history } = this.props;

    return (
      <ChatWrapper>
        <h1>dialog</h1>
        <p onClick={() => history.push('/')}>back</p>

        <MessageArea rows='1'></MessageArea>
      </ChatWrapper>
    );
  }
}

export default Chat;
