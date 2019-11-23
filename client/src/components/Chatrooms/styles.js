import styled from 'styled-components';

const List = styled.ul`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  overflow: auto;
  margin: 15px -300px 15px 15px;
  padding-right: 300px;
  text-align: center;
`;

const ListElement = styled.li`
  display: inline-block;
`;

export { List, ListElement };
