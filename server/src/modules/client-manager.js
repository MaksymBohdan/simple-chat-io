const allUsers = require('./templates/usersList');

// Все доступные устройства с пользователями что есть в чате
const clients = {};

const getAllUsers = () => {
  const chosenUsersId = []; 

  Object.values(clients).map(client => chosenUsersId.push(client.user.id));

  return allUsers.filter(user => !chosenUsersId.includes(user.id));
};

const getUserByName = userName => allUsers.find(user => user.name === userName);

const registerClient = (client, user) => {
  // client - устройство/клиент
  // user - пользователь
  console.log('Client registered', client.id);

  clients[client.id] = { client, user };
};

const unregisterClient = (client) => {
  delete clients[client.id];
}

const getUserByClientId = id => {
  const client = clients[id];
  return client.user;
};

module.exports = {
  getUserByName,
  registerClient,
  getUserByClientId,
  getAllUsers,
  unregisterClient
};
