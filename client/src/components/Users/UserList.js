import React from 'react';
import UsersView from './UserView';
import { Backdrop, ModalWindow, Inner, ReturnBtn, UserItem } from './styles';

const UserList = ({ allUsers, handleClientRegistration, history, backdropRef }) => (
  <Backdrop >
    <ModalWindow ref={backdropRef}>
      <ReturnBtn onClick={() => history.push('/')}>X</ReturnBtn>
      <Inner>
        <ul>
          {allUsers.map(user => (
            <UserItem key={user.name}>
              <UsersView key={user.id} user={user} onClick={() => handleClientRegistration(user.name)} />
            </UserItem>
          ))}
        </ul>
      </Inner>
    </ModalWindow>
  </Backdrop>
);

export default UserList;
