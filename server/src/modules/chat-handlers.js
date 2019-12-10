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

  const getUserAndChatroom = (chatroomName, client) => {
    return new Promise((resolve, reject) => {
      const user = getUserByClientId(client.id);

      const chatRoom = getChatRoomByName(chatroomName);

      if (user && chatRoom) return resolve({ user, chatRoom });

      return reject();
    });
  };

  const handleJoinClient = (chatroomName, res) => {
    const joinMessage = { event: `joined ${chatroomName}` };

    getUserAndChatroom(chatroomName, client)
      .then(({ user, chatRoom }) => {
        chatRoom.addMessageToHistory({ ...joinMessage, ...user });
        chatRoom.addUser(client);
        chatRoom.broadcastMessage(joinMessage);

        res(null, chatRoom.getChatHistory());
      })
      .catch(err => console.log(err));
  };

  const handleLeaveClient = (chatroomName, res) => {
    const leaveMessage = { event: `leaved ${chatroomName}` };

    getUserAndChatroom(chatroomName, client)
      .then(({ user, chatRoom }) => {
        chatRoom.addMessageToHistory({ ...leaveMessage, ...user });
        chatRoom.removeUser(client);

        res(null);
        return chatRoom;
      })
      .then(chatRoom => chatRoom.broadcastMessage(leaveMessage))
      .catch(err => console.log(err));
  };

  return { handleGetAllUsers, handleClientRegistration, handleGetAllChatrooms, handleJoinClient, handleLeaveClient };
};

module.exports = chatHandlers;
