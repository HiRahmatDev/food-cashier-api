const menuModel = require('../model/menu');

module.exports = {
  getMenu: (req, res) => {
    menuModel.getMenu()
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        res.json({
          result: err
        })
      });
  },
  menuCategory: (req, res) => {
    menuModel.menuCategory()
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        res.json({
          result: err
        })
      })
  },
  menuDetail: (req, res) => {
    menuModel.menuDetail(req.params.id)
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        res.json({
          result: err
        })
      });
  },
  addMenu: (req, res) => {
    const { food_title, id_category, food_price, counter, img_url } = req.body;
    const data = {
      food_title,
      id_category,
      food_price,
      counter: counter || 1,
      img_url
    }
    res.json({
      data
    })
    // menuModel.addMenu(data)
    //   .then(result => {
    //     res.json(result);
    //   })
    //   .catch((err) => {
    //     res.json({
    //       result: err
    //     })
    //   });
  },
  deleteMenu: (req, res) => {
    console.log(req.params)
    res.json({msg: 'test success'})
    // menuModel.addMenu(req.params.id)
    //   .then((result) => {
    //     res.json(result);
    //   })
    //   .catch((err) => {
    //     res.json({
    //       result: err
    //     })
    //   });
  }
};