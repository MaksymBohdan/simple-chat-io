import styled from 'styled-components';

const List = styled.ul`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  text-align: center;
  padding-right: 17px;
  overflow-y: scroll;
  box-sizing: content-box;
`;

const ListElement = styled.li`
  margin-left: 17px;
  display: inline-block;
`;

export { List, ListElement };
