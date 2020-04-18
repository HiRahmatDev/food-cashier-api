const authModel = require('../model/auth');
const bcrypt = require('bcrypt');

module.exports = {
  register: (req, res) => {
    const { fullname, email, password } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const encryptedPass = bcrypt.hashSync(password, salt);
    const dataUser = {
      email,
      id_role: 2,
      fullname,
      salt,
      password: encryptedPass,
      is_active: 0
    }
    authModel.register(dataUser)
      .then(result => {
        delete result.info;
        result.infoHead = 'Almost done...';
        result.infoBody = 'We\'ve sent an email to ' + email + '. Open it up to activate your account.';
        res.json(result);
      })
      .catch(err => {
        res.json({
          result: err
        })
      });
  }
};