const conn = require('../config/db');

module.exports = {
  getMenu: () => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT `food_menu`.*, `food_category`.`name_category` FROM `food_menu` INNER JOIN `food_category` ON `food_menu`.`id_category` = `food_category`.`id`', (err, rows) => {
        if (err) {
          reject(new Error(err));
        }
        resolve(rows);
      });
    });
  },
  menuCategory: () => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT * FROM `food_category`', (err, rows) => {
        if (err) {
          reject(new Error(err))
        }
        resolve(rows)
      })
    })
  },
  menuDetail: (id) => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT * FROM `food_menu` WHERE `id` = ?', id, (err, rows) => {
        if (err) {
          reject(new Error(err));
        }
        resolve(rows);
      });
    });
  },
  addMenu: (data) => {
    return new Promise((resolve, reject) => {
      conn.query('INSERT INTO `food_menu` SET ?', data, (err, rows) => {
        if (err) {
          reject(new Error(err));
        }
        resolve(rows);
      });
    });
  }
}
