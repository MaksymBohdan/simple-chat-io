import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';

const Main = ({ user }) => (
  <>
    <Logo user={user} />
    <Link to='/users'>{user ? user.name : 'Who are you ?'} </Link>

  </>
);

export default Main;
