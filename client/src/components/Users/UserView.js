import React from 'react';
import { UserPhoto } from './styles';

const UserView = ({ user, onClick, history }) => (
  <div onClick={onClick}>
    <UserPhoto src={user.image} alt='user' history={history} />
    <p>{user.name}</p>
  </div>
);

export default UserView;
