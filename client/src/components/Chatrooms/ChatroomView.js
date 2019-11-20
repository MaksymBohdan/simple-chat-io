import React from 'react';
import { Link } from 'react-router-dom';

const ChatroomView = ({ room }) => (
  <Link to={`/chatroom`}>
    <img src={room.image} alt='room' />
    <p>{room.name}</p>
  </Link>
);

export default ChatroomView;
