import styled from 'styled-components';
import { Link } from 'react-router-dom';

const List = styled.ul`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  text-align: center;
  padding: 10px 17px 10px 0;
  overflow-y: scroll;
  box-sizing: content-box;
`;

const ListElement = styled.li`
  margin-left: 17px;
  display: inline-block;
  padding-bottom: 10px;
  text-transform: uppercase;
`;

const ChatroomListTitle = styled.h2`
  text-transform: uppercase;
  color: white;
  font-weight: bold;
  font-size: 20px;
  margin: auto;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

const RoomImg = styled.img`
  width: 100%;
  max-width: 320px;
  height: 220px;
  border-radius: 10px;
`;

export { List, ListElement, ChatroomListTitle, StyledLink, RoomImg };
