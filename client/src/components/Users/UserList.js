import React from 'react';
import UsersView from './UserView';
import { Backdrop, ModalWindow, Inner, ReturnBtn } from './styles';

const UserList = ({ allUsers, fetchUser }) => (
  <Backdrop>
    <ModalWindow>
      <Inner>
        <ReturnBtn>Go Back</ReturnBtn>
        <ul>
          {allUsers.map(user => (
            <li key={user.name}>
              <UsersView key={user.id} user={user} onClick={() => fetchUser(user.name)} />
            </li>
          ))}
        </ul>
      </Inner>
    </ModalWindow>
  </Backdrop>
);

export default UserList;
