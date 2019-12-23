import React from 'react';
import { TextMessage, MessageContent, EventMessage, Avatar, InfoSection } from './styles';

const Message = ({ item }) =>
  item.event ? (
    <EventMessage>{item.name + ' ' + item.event}</EventMessage>
  ) : (
    <TextMessage>
      <InfoSection>
        <Avatar src={item.image} />
        <span>{item.name}</span>
      </InfoSection>
      <MessageContent>{item.message}</MessageContent>
    </TextMessage>
  );
export default Message;
