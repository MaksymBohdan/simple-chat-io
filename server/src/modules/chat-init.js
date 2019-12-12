const io = require('socket.io');
const chatHandlers = require('./chat-handlers');

const initChat = server => {
  const socketIo = io(server);

  socketIo.on('connection', client => {
    console.log('client connected...', client.id);
    const {
      handleGetAllUsers,
      handleClientRegistration,
      handleGetAllChatrooms,
      handleJoinClient,
      handleLeaveClient,
      handleMessage
    } = chatHandlers(client);

    client
      .on('register', handleClientRegistration)
      .on('join', handleJoinClient)
      .on('leave', handleLeaveClient)
      .on('message', handleMessage)
      .on('allUsers', handleGetAllUsers)
      .on('allChatRooms', handleGetAllChatrooms)
  });
};

module.exports = initChat;
