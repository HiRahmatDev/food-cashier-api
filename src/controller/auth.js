const authModel = require('../model/auth');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');

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
        const token = jwt.sign({
          email: email,
          fullname: fullname,
          role: 2
        }, process.env.SECRET_KEY, { expiresIn: '4h' })
        result.info = {
          head: 'Almost done...',
          body: 'We\'ve sent an activation email to ' + email + '. Open it up to verify your account.'
        }
        result.status = 'warning'
        result.token = token
        res.status(201).json(result);
      })
      .catch(() => {
        res.status(203).json({
          status: 'danger',
          info: {
            head: 'Email has been registered!'
          }
        })
      });
  },
  login: (req, res) => {
    const { email, password } = req.body;
    authModel.login(email)
    .then(result => {
      const matchedPassword = bcrypt.compareSync(password, result[0].password)
      const token = jwt.sign({
        email: result[0].email,
        fullname: result[0].fullname,
        role: result[0].id_role
      }, process.env.SECRET_KEY, { expiresIn: '4h' })
        if (matchedPassword) {
          if (result[0].is_active === 0) {
            res.status(203).json({
              status: 'warning',
              info: 'Your email is not verified!',
              token
            })
            return
          }
          result[0].status = 'success';
          result[0].info = 'Login Success!';
          result[0].token = token;
          res.status(202).json(result[0]);
          return
        }
        res.status(203).json({
          status: 'danger',
          info: 'Wrong Password!'
        })
      })
      .catch(() => {
        res.status(203).json({
          status: 'danger',
          info: 'Invalid Email!'
        })
      })
  },
  sendEmail: (req, res) => {
    const { token } = req.body;
    const dataUser = jwt.verify(token, process.env.SECRET_KEY)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD_EMAIL
      }
    });
    const handlebarOptions = {
      viewEngine: {
        extName: '.hbs',
        partialsDir: './src/views',
        layoutsDir: './src/views',
        defaultLayout: 'index.hbs',
      },
      viewPath: './src/views',
      extName: '.hbs',
    };
    transporter.use('compile', hbs(handlebarOptions));
    const mailOptions = {
      from   : process.env.EMAIL,
      to     : dataUser.email,
      subject: 'Easy Cashier App Activation Email',
      template: 'index',
      context: {
        fullname: dataUser.fullname,
        urlLink: process.env.URL_FRONT + 'login?confirm=' + token
      }
    };
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err)
      }
      res.json({
        msg: 'Email Verification Sent!',
        info
      })
    });
  },
  confirm: (req, res) => {
    const { token } = req.body
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) {
        res.status(203).json({
          token: decoded,
          status: 'danger',
          info: 'Invalid/Expired Token!'
        })
        return
      }
      authModel.confirm(decoded.email)
        .then(result => {
          result.token = decoded
          result.info = 'Activation Success!'
          result.status = 'success'
          res.status(202).json(result)
        })
        .catch(() => {
          res.status(203).json({
            status: 'danger',
            info: 'Activation Failed!'
          })
        })
    })
  }
};