const express = require('express')
const router = express.Router()
const cfg = require('../../config/GeneralConfig')

module.exports = () => {
  const swaggerUi = require('swagger-ui-express')
  const swaggerJSDoc = require('swagger-jsdoc')
  const swaggerDef = require('../../config/SwaggerConfig')
  const swaggerOptions = {
    definition: swaggerDef,
    apis: swaggerDef.apis
  }
  const swaggerSpec = swaggerJSDoc(swaggerOptions)
  const options = {
    customSiteTitle: cfg.app.applicationName,
    customCss: '.swagger-ui .topbar { display: none }',
    //customfavIcon: '/favicon.ico',
    explorer: true,
    filter: true,
    swaggerOptions: {
      docExpansion: 'none',
      apisSorter: 'alpha',
      operationsSorter: (a, b) => {
        let methodsOrder = [
          'post',
          'put',
          'patch',
          'delete',
          'get',
          'options',
          'trace'
        ]
        let result =
          methodsOrder.indexOf(a.get('method')) -
          methodsOrder.indexOf(b.get('method'))

        if (result === 0) {
          result = a.get('path').localeCompare(b.get('path'))
        }

        return result
      }
    }
  }

  router.use('/', swaggerUi.serve)
  router.get('/', swaggerUi.setup(swaggerSpec, options))

  return router
}
