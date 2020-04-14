require('dotenv').config();
const express = require('express');
const App = express();

const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');

App.use(bodyParser.urlencoded({ extended: false }));
App.use(bodyParser.json());
App.use(cors());
App.use(logger('dev'));

App.use('/', (req, res) => {
  res.json({
    status: 'Success!',
    msg: 'Test coba-coba'
  });
});

App.listen(process.env.PORT_API, () => {
  console.log('Server is running on http://' + process.env.HOST_API + ':' + process.env.PORT_API);
});
