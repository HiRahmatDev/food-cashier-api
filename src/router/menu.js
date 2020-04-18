const express = require('express');
const Router = express.Router();

const menuController = require('../controller/menu.js');

Router
  .get('/', menuController.getMenu)
  .get('/category', menuController.menuCategory)
  .get('/:id', menuController.menuDetail)
  .post('/', menuController.addMenu)
  .post('/delete/:id', menuController.deleteMenu)

module.exports = Router;