const express = require('express')
const router = express.Router()

module.exports = () => {
  router.get('/userLogin', require('./services/login'))

  return router
}