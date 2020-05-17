const conn = require('../config/db');

module.exports = {
  allUser: () => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT `user`.*, `role_user`.`role_name` FROM `user` JOIN `role_user` ON `user`.`id_role` = `role_user`.`id`', (err, rows) => {
        if (err) {
          reject(new Error(err))
        }
        resolve(rows)
      })
    })
  },
  userDetail: (id) => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT * FROM `user` WHERE `id` = ?', id, (err, rows) => {
        if (err) {
          reject(new Error(err))
        }
        resolve(rows)
      })
    })
  }
}
