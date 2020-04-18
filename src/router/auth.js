const express = require('express');
const Router = express.Router();

const authController = require('../controller/auth.js');

Router
  .post('/register', authController.register)

module.exports = Router;