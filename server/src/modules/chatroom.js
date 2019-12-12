const createChatroom = () => {
  const members = {};
  const historyMessages = [];

  const addMessageToHistory = msg => historyMessages.push(msg);

  const broadcastMessage = (message, chatroomName) => {
    Object.values(members)
      .filter(member => member.currentChatroom === chatroomName)
      .forEach(member => member.emit('message', message));
  };

  const addUser = (client, chatroomName) => {
    members[client.id] = client;
    members[client.id].currentChatroom = chatroomName;

    console.log('user added');
  };
  const removeUser = client => {
    delete members[client];
    console.log('user left');
  };

  const getChatHistory = () => {
    return historyMessages;
  };

  return { addMessageToHistory, broadcastMessage, addUser, getChatHistory, removeUser };
};

module.exports = createChatroom;
