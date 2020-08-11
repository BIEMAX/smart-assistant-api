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

const asyncCust = require('../../../lib/Waterfall')
//const enumTypes = require('../../../lib/')
const moduleLogin = require('../modules/login')

module.exports = (req, res, next) => {
  asyncCust(
    [
      (done) => {
        moduleLogin(req.body)
          .then((data) => {
            return res.status(200).json(data)
          })
          .catch((error) => {
            done(error)
          })
      }
    ],
    (error, conn) => {
      if (conn) conn.close()
      next(error)
    }
  )
}