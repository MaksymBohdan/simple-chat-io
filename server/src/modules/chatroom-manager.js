const chatroomTempates = require('./templates/chatroomsList');
const createChatroom = require('./chatroom');

const chatrooms = {};

chatroomTempates.forEach(room => (chatrooms[room.name] = createChatroom(room)));

const getChatRoomByName = chatroomName => {
  return chatrooms[chatroomName];
};

const getAllChatrooms = () => {
  const roomsAll = Object.values(chatrooms).map(room => room.getRoomInfo());

  return roomsAll;
};

const removeClientFromChats = client => {
  Object.values(chatrooms).map(room => room.removeUser(client));
}

module.exports = { getChatRoomByName, getAllChatrooms, removeClientFromChats };
