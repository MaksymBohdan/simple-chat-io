import React from 'react';


const UserView = ({ user, onClick }) => (
  <div onClick={onClick}>
    <p>{user.name}</p>
    <img src={user.image} alt='user' />
    <p>{user.statusText}</p>
  </div>
);

export default UserView;
