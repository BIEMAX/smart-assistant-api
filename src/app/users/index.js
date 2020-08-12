const express = require('express')
const router = express.Router()

const validador = require('../../lib/Validator')
const validaLogin = require('./validation/chkLogin')

module.exports = () => {
  router.get('/login', validaLogin, validador, require('./services/login'))
  router.get('/permission', require('./services/permission'))
  return router
}