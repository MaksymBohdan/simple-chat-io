const allChatRooms = require('./templates/chatroomsList');
const chatroomTempates = require('./templates/chatroomsList');
const createChatroom = require('./chatroom');

const chatrooms = {};

chatroomTempates.forEach(room => (chatrooms[room.name] = createChatroom(room)));

const getChatRoomByName = chatroomName => {
  return chatrooms[chatroomName];
};

const getAllChatrooms = () => {
  return allChatRooms;
};

module.exports = { getChatRoomByName, getAllChatrooms };
