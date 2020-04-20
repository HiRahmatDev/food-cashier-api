const express = require('express');
const Router = express.Router();

const authController = require('../controller/auth.js');

Router
  .post('/register', authController.register)
  .post('/login', authController.login)
  .post('/send-email', authController.sendEmail)
  .post('/confirm', authController.confirm);

module.exports = Router;