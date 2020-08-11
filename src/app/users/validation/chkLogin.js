'use strict'
const check = require('express-validator/check').check

module.exports =
  [
    check('login')
      .isLength({ min: 1 })
      .withMessage('Login cannot be empty'),
    check('password')
      .isLength({ min: 1 })
      .withMessage('Password cannot be empty'),
  ]