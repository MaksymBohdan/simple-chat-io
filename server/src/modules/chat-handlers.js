const { getUserByName, registerClient, getUserByClientId, getAllUsers } = require('./client-manager');
const { getChatRoomByName, getAllChatrooms } = require('./chatroom-manager');

const chatHandlers = client => {
  const handleGetAllUsers = res => {
    return res(null, getAllUsers());
  };

  const handleGetAllChatrooms = res => {
    return res(null, getAllChatrooms());
  };

  const handleClientRegistration = (userName, res) => {
    const user = getUserByName(userName);

    registerClient(client, user);

    return res(null, user);
  };

  const ensureValidUserAndChatroom = (chatroomName, client) => {
    return new Promise((resolve, reject) => {
      const user = getUserByClientId(client.id);
      const chatRoom = getChatRoomByName(chatroomName);

      if (user && chatRoom) return resolve({ user, chatRoom });

      return reject();
    });
  };

  const handleJoinClient = (chatroomName, res) => {
    ensureValidUserAndChatroom(chatroomName, client)
      .then(({ user, chatRoom }) => {
        const joinMessage = { ...user, event: `joined ${chatroomName}` };

        chatRoom.addMessageToHistory(joinMessage);
        chatRoom.broadcastMessage({ ...joinMessage, chat: chatroomName });
        chatRoom.addUser(client);

        res(null, chatRoom.getChatHistory());
      })
      .catch(err => console.log(err));

    return null;
  };

  return { handleGetAllUsers, handleClientRegistration, handleGetAllChatrooms, handleJoinClient };
};

module.exports = chatHandlers;
