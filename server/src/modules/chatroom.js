const createChatroom = ({ name: roomname, image }) => {
  const members = {};
  const historyMessages = [];

  const addMessageToHistory = msg => historyMessages.push(msg);

  const broadcastMessage = message => {
    Object.values(members)
      .filter(member => member.currentChatroom === roomname)
      .forEach(member => member.emit('message', message));
  };

  const addUser = client => {
    members[client.id] = client;
    members[client.id].currentChatroom = roomname;
  };

  const removeUser = client => {
    delete members[client];
  };

  const getChatHistory = () => {
    return historyMessages;
  };

  const getRoomInfo = () => {
    return { name: roomname, image, size: Object.keys(members).length };
  };

  return { addMessageToHistory, broadcastMessage, addUser, getChatHistory, removeUser, getRoomInfo };
};

module.exports = createChatroom;
