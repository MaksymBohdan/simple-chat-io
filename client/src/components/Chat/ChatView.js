import React from 'react';
import Message from '../Message/Message';
import {
  ChatWrapper,
  MessageArea,
  LeaveChatButton,
  SendMessageDiv,
  SendImg,
  TextAreaWrapper,
  ChatWrapperInner,
  MessageItem
} from './styles';

import send from '../../assets/send.png';

const ChatView = ({
  leaveClientFromChat,
  isOwnMessage,
  message,
  chatHistory,
  onMessageSend,
  onMessageChange,
  messagesEndRef
}) => {
  return (
    <>
      <ChatWrapper>
        <ChatWrapperInner>
          <LeaveChatButton onClick={leaveClientFromChat}>X</LeaveChatButton>
          <ul ref={messagesEndRef}>
            {chatHistory.map((item, idx) => {
              return (
                <MessageItem key={idx} isOwnMessage={isOwnMessage(item)}>
                  <Message item={item} />
                </MessageItem>
              );
            })}
          </ul>
        </ChatWrapperInner>
      </ChatWrapper>
      <TextAreaWrapper>
        <MessageArea onChange={onMessageChange} value={message} />
        <SendMessageDiv>
          <SendImg onClick={onMessageSend} src={send} width='50' heigth='50' />
        </SendMessageDiv>
      </TextAreaWrapper>
    </>
  );
};

export default ChatView;
