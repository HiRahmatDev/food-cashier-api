const conn = require('../config/db');

module.exports = {
  register: (data) => {
    return new Promise((resolve, reject) => {
      conn.query('INSERT INTO `user` SET ?', data, (err, rows) => {
        if (err) {
          reject(new Error(err));
        }
        resolve(rows);
      });
    });
  }
}
