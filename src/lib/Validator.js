/**
 * @apiIgnore
 *
 * Express validation check
 *
 */

const async = require('async')
const asyncCust = require('./waterfall')

const validationResult = require('express-validator/check').validationResult

module.exports = (req, res, next) => {
  const result = validationResult(req)
  const mapped = result.mapped()
  const errors = {}
  asyncCust(
    [
      done => {
        if (!result.isEmpty()) {
          // Error Handler

          async.forEachOf(mapped, (value, key) => {
            errors[key] = {
              message:
                mapped[key].msg === 'Invalid value'
                  ? 'Por favor, informe um valor válido para ' + mapped[key].param.charAt(0).toUpperCase() + mapped[key].param.slice(1)
                  : mapped[key].msg,
            }

            done(null, errors)
          })
        } else {
          return next()
        }
      },
      dados => {
        let erros
        async.forEachOf(dados, value => {
          erros = value.message
          next(new Error(erros))
        })
      },
    ],
    err => {
      next(err)
    },
  )
}
