import React from 'react';
import UsersView from './UserView';
import { Backdrop, ModalWindow, Inner, ReturnBtn } from './styles';

const UserList = ({ allUsers, handleClientRegistration }) => (
  <Backdrop>
    <ModalWindow>
      <ReturnBtn>Go Back</ReturnBtn>
      <Inner>
        <ul>
          {allUsers.map(user => (
            <li key={user.name}>
              <UsersView key={user.id} user={user} onClick={() => handleClientRegistration(user.name)} />
            </li>
          ))}
        </ul>
      </Inner>
    </ModalWindow>
  </Backdrop>
);

export default UserList;
