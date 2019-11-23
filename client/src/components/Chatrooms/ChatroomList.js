import React from 'react';
import { Link } from 'react-router-dom';

const ChatroomList = ({ chatrooms }) => (
  <ul style={{ backgroundColor: `rgba(0, 0, 0, 0.4)`, width: '100%' }}>
    {chatrooms.map(room => (
      <li key={room.name}>
        <Link to={`/chatroom/${room.name}`}>
          <img src={room.image} alt='room' />
          <p>{room.name}</p>
        </Link>
      </li>
    ))}
  </ul>
);

export default ChatroomList;
