require('dotenv').config();
const express = require('express');
const App = express();

const bodyParser = require('body-parser');
const router = require('./src/router');
const logger = require('morgan');
const cors = require('cors');

App.use(bodyParser.urlencoded({ extended: false }));
App.use(bodyParser.json());
App.use(cors());
App.use(logger('dev'));

App.use('/api/v1', router);
App.use('*', (req, res) => {
  res.json({
    status: 'Not Found!',
    code: 404
  });
});

App.listen(process.env.PORT_API, () => {
  console.log('Server is running on http://' + process.env.HOST_API + ':' + process.env.PORT_API);
});

