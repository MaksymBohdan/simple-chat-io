import React from 'react';

const UserView = ({ user, onClick }) => (
  <li onClick={onClick}>
    <p>{user.name}</p>
    <img src={user.image} alt='user' />
    <p>{user.statusText}</p>
  </li>
);

export default UserView;
