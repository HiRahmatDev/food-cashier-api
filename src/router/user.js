const express = require('express');
const Router = express.Router();

const userController = require('../controller/user.js');

Router
  .get('/', userController.allUser)
  .get('/:id', userController.userDetail)

module.exports = Router;