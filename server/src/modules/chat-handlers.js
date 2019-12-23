const { getUserByName, registerClient, getUserByClientId, getAllUsers, unregisterClient } = require('./client-manager');
const { getChatRoomByName, getAllChatrooms, removeClientFromChats } = require('./chatroom-manager');

const chatHandlers = client => {
  const handleClientRegistration = (userName, res) => {
    const user = getUserByName(userName);

    registerClient(client, user);

    return res(null, user);
  };

  const handleGetAllUsers = res => {
    return res(null, getAllUsers());
  };

  const handleGetAllChatrooms = res => {
    return res(null, getAllChatrooms());
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
    getUserAndChatroom(chatroomName, client)
      .then(({ user, chatRoom }) => {
        const joinMessage = { event: `joined ${chatroomName}`, ...user };

        chatRoom.addMessageToHistory(joinMessage);
        chatRoom.addUser(client);
        chatRoom.broadcastMessage(joinMessage);

        res(null, chatRoom.getChatHistory());
      })
      .catch(err => console.log(err));
  };

  const handleLeaveClient = (chatroomName, res) => {
    getUserAndChatroom(chatroomName, client)
      .then(({ user, chatRoom }) => {
        const leaveMessage = { event: `leaved ${chatroomName}`, ...user };

        chatRoom.removeUser(client);
        chatRoom.addMessageToHistory(leaveMessage);

        return { chatRoom, leaveMessage };
      })
      .then(({ chatRoom, leaveMessage }) => {
        chatRoom.broadcastMessage(leaveMessage);

        res(null);
      })
      .catch(err => console.log(err));
  };

  const handleMessage = (message, res) => {
    getUserAndChatroom(message.roomname, client)
      .then(({ user, chatRoom }) => {
        chatRoom.addMessageToHistory({ ...message, ...user });
        chatRoom.broadcastMessage(message);

        return res(null);
      })
      .catch(err => console.log('err', err));
  };

  const handleDisconnect = () => {
    removeClientFromChats(client);
    unregisterClient(client);
  };

  return {
    handleGetAllUsers,
    handleClientRegistration,
    handleGetAllChatrooms,
    handleJoinClient,
    handleLeaveClient,
    handleMessage,
    handleDisconnect
  };
};

module.exports = chatHandlers;
