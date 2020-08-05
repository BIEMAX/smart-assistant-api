const express = require('express')
const router = express.Router()

module.exports = () => {
  router.get('/login', require('./services/login'))

  return router
}