const createChatroom = () => {
  const members = {};
  const historyMessages = [];

  const addMessageToHistory = msg => historyMessages.push(msg);

  const broadcastMessage = message => {
    Object.values(members).forEach(member => {
      member.emit('message', message);
    });
  };

  const addUser = client => {
    members[client.id] = client;
    console.log('user added');
  };

  const getChatHistory = () => {
    return historyMessages;
  };

  return { addMessageToHistory, broadcastMessage, addUser, getChatHistory };
};

module.exports = createChatroom;
