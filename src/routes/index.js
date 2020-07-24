const cfg = require('../config/GeneralConfig')

module.exports = (app) => {
  app.use('/v1/users', require('../app/users')(app))
  //app.use('/v1/tasks', require('../app/tasks'))
  //app.use('/v1/tickets', require('../app/tickets'))
}