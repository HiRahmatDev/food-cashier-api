const express = require('express');
const App = express();

const menu = require('./menu');
const auth = require('./auth');

const Router = express.Router();

Router
  .use('/menu', menu)
  .use('/auth', auth);

module.exports = Router;