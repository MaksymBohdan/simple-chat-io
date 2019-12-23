import styled from 'styled-components';

const TextMessage = styled.div`
  width: 40%;
  background-color: white;
  color: grey;
  text-transform: uppercase;
  border-radius: 10px;
  border: 1px solid grey;
  padding: 10px;
  margin-bottom: 10px;
`;

const MessageContent = styled.p`
  color: black;
  text-transform: none;
`;

const EventMessage = styled.div`
  width: 40%;
  border-radius: 10px;
  border: 1px solid grey;
  padding: 5px;
  margin: 5px auto;
  text-align: center;
`;

const Avatar = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 1px solid black;
`;

const InfoSection = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px grey solid;
  margin-bottom: 5px;
  padding-bottom: 5px;
`;

export { TextMessage, MessageContent, EventMessage, Avatar, InfoSection };
