const userModel = require('../model/user');

module.exports = {
  allUser: (req, res) => {
    // res.json({
    //   msg: 'success'
    // })
    userModel.allUser()
      .then(result => {
        res.status(200).json(result);
      })
      .catch(err => {
        console.log(err);
        res.json({
          msg: '404 not found!'
        })
      });
  },
  userDetail: (req, res) => {
    const id = req.params.id;
    userModel.userDetail(id)
      .then(result => {
        res.status(200).json(result);
      })
      .catch(err => {
        console.log(err);
        res.json({
          msg: '404 not found!'
        })
      })
  }
};