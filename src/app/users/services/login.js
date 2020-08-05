/**
 * @swagger
 * /user/login:
 *   get:
 *     summary: User login
 *     operationId: login
 *     description: Allow user login into the system.
 *     tags:
 *      - user
 *     security:
 *       - Apikey: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - login
 *               - password
 *             properties:
 *               login:
 *                 type: string
 *               password:
 *                 type: string
 *                 format: password
 *     responses:
 *       200:
 *         description: Resposta obtida
 *       400:
 *         description: Parâmetros inválidos
 *       401:
 *         description: unkown
 *       403:
 *         description: unkown
 *       404:
 *         description: unkown
 */

const async = require('async')
//const enumTypes = require('../../../lib/')

module.exports = (req, res, next) => {
  async.waterfall(
    [
      done => {
        console.log(req.body)
        let usr = req.body.login;
        let pws = req.body.password;

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
            return res.status(200).json(payload)
          }
          else done(new Error('Password is invalid'))
        }
        else done(new Error('User or password are invalid. Try again.'))
      }
    ],
    (err, cnn) => {
      if (cnn) cnn.close()
      next(err)
    }
  )
}