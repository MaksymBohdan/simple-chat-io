const app = require('express')();
const server = require('http').Server(app);
const bodyParser = require('body-parser');
const corsMiddleware = require('cors');
const errorHandler = require('./utils/errorHandler');
const homePage = require('./controllers/homePage');
const initChat = require('./modules/chat-init');

initChat(server);

app
  .use(corsMiddleware())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  // .use('/', homePage)
  .use(corsMiddleware)
  .use(errorHandler);

module.exports = server;
