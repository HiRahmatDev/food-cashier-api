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
  },
  login: (email) => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT * FROM `user` WHERE `email` = ?', email, (err, rows) => {
        if (err) {
          reject(new Error(err))
        }
        resolve(rows)
      })
    })
  },
  confirm: (email) => {
    return new Promise((resolve, reject) => {
      conn.query('UPDATE `user` SET `is_active` = 1 WHERE `email` = ?', email, (err, rows) => {
        if (err) {
          reject(new Error(err))
        }
        resolve(rows)
      })
    })
  }
}
