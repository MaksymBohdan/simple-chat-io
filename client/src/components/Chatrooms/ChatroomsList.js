import React from 'react';
import { List, ListElement, ChatroomListTitle, StyledLink, RoomImg } from './styles';

const ChatroomsList = ({ chatrooms }) => (
  <>
    <ChatroomListTitle>{'please, choose a room'}</ChatroomListTitle>
    <List>
      {chatrooms.map(room => (
        <ListElement key={room.name}>
          <StyledLink to={`/chatroom/${room.name}`}>
            <RoomImg src={room.image} alt='room' />
            <p>{room.name}</p>
          </StyledLink>
        </ListElement>
      ))}
    </List>
  </>
);

export default ChatroomsList;
