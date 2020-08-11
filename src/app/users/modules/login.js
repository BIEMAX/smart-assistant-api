const async = require('async')

module.exports = (params) => {
  return new Promise((resolve, reject) => {
    async.waterfall(
      [
        done => {
          let usr = params.login;
          let pws = params.password;

          if (usr != undefined && usr.trim() == 'ADMIN') {
            if (pws != undefined && pws.trim() == 'ftepkosdafsdfxc3123464fd') {
              let payload = {
                authentication: 'granted',
                bearer: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjkzMzgzODc4MDE1In0.O6krieMNQKJYGnghxqUTt2doFJd6OLEefI3Y9euuvyU',
                apiKey: 'Api-Key ZWE4ODc0NzViNzRiYjkwNmFkNGI3ZjZl',
                profile: 'admin',
                permissions: [
                  { module: 'users', grant: true },
                  { module: 'tasks', grant: true },
                  { module: 'production', grant: true },
                  { module: 'shopflor', grant: true },
                  { module: 'quotes', grant: true },
                  { module: 'sales', grant: false },
                  { module: 'reports', grant: true },
                  { module: 'bi', grant: false },
                  { module: 'development', grant: false }
                ]
              }
              resolve(payload)
            }
            else done(new Error('Password is invalid'))
          }
          else done(new Error('User or password are invalid. Try again.'))
        }
      ],
      (err, conn) => {
        if (conn) cpnn.close()
        reject(err)
      }
    )
  })
}