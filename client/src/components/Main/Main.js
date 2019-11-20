import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import Logo from '../Logo/Logo';
import ChatRooms from '../Chatrooms/ChatroomList';
import MainLayout from '../MainLayout/MainLayout';
import Dialog from '../Dialog/Dialog';

const LogoDiv = styled.div`
  width: 40%;
  height: 90%;
  display: flex;
  justify-content: center;
`;

const ChatDiv = styled.div`
  width: 40%;
  height: 90%;
  display: flex;
  background-color: grey;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: auto;
`;

const Main = ({ user, ...props }) => (
  <MainLayout>
    <LogoDiv>
      <Logo user={user} />
    </LogoDiv>
    <ChatDiv>
      <Switch>
        <Route exact path='/' component={ChatRooms} />
        <Route exact path='/chatroom' render={props => <Dialog {...props} />} />
      </Switch>
    </ChatDiv>
  </MainLayout>
);

export default Main;
