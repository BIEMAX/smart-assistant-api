const cfg = require('../config/GeneralConfig')

module.exports = (app) => {
  //Routes
  app.use('/v1/users', require('../app/users')(app))
  //app.use('/v1/tasks', require('../app/tasks'))
  //app.use('/v1/tickets', require('../app/tickets'))

  //API documentation
  app.use('/api', require('../app/apidoc')(app))
  app.use('/', require('../app/apidoc')(app))
}