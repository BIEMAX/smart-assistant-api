'use strict'

/**
 * @apiIgnore
 *
 * Customize return json error from API.
 *
 * @param {Object} err
 * @return {JSON}
 * @api private
 */

const config = require('../config/GeneralConfig')

const ValidationErrors = {
  REQUIRED: 'required',
  ENUM: 'enum',
  USER_DEFINED: 'user defined',
}

module.exports = function (err) {
  let error = {}

  error.status = err.status ? err.status : 400
  error.message = err.message ? err.message : 'Desculpa, algo inesperado aconteceu'

  // Custom Errors
  if (err && err instanceof Error) {
    if (err.name === 'ValidationError') {
      error.details = {}

      for (var errName in err.errors) {
        error.message = 'Existem erros de validação'

        let kind = err.errors[errName].kind
        // let code = err.errors[errName].code
        let pathMsg = err.errors[errName].path.split('.')
        pathMsg = pathMsg[pathMsg.length - 1]
        pathMsg = pathMsg.charAt(0).toUpperCase() + pathMsg.slice(1)
        pathMsg = pathMsg.split(/(?=[A-Z])/).join(' ')
        if (kind === ValidationErrors.REQUIRED) {
          error.details[errName] = {
            message: ('Por favor, informe um valor válido para %s.', pathMsg),
          }
        } else if (kind === ValidationErrors.ENUM) {
          error.details[errName] = {
            message: ('Por favor, informe um valor válido para %s.', pathMsg),
            enum: err.errors[errName].properties.enumValues,
          }
        } else if (kind === ValidationErrors.USER_DEFINED) {
          error.details[errName] = {
            message: err.errors[errName].properties.msg ? err.errors[errName].properties.msg : ('Por favor, informe um valor válido para %s.', pathMsg),
          }
        } else {
          error.details[errName] = {
            message: ('Por favor, informe um valor válido para %s.', pathMsg),
            properties: err.errors[errName].properties,
          }
        }
      }
    } else {
      error.message = err.message
    }
  }

  // Show original error
  if (err && config.app.environment == 'development') {
    error.original = err
  }

  return error
}