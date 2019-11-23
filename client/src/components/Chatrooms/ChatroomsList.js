import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListElement } from './styles';

const ChatroomsList = ({ chatrooms }) => (
  <List>
    {chatrooms.map(room => (
      <ListElement key={room.name}>
        <Link to={`/chatroom/${room.name}`}>
          <img src={room.image} alt='room' />
          <p>{room.name}</p>
        </Link>
      </ListElement>
    ))}
  </List>
);

export default ChatroomsList;
