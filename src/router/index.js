const express = require('express');
// const App = express();

const menu = require('./menu');
const user = require('./user');
const auth = require('./auth');

const Router = express.Router();

Router
  .use('/menu', menu)
  .use('/user', user)
  .use('/auth', auth);

module.exports = Router;