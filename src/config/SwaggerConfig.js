const config = require('./GeneralConfig')

module.exports = {
  openapi: '3.0.0', //swagger version, do not change
  info: {
    title: config.app.applicationName + ' (' + config.app.environment + ')',
    version: config.app.version,
    description: config.app.environment.toUpperCase(),
    termsOfService: 'https://api.doctorclin.com.br/declaracoes/termos_usu',
    contact: {
      email: 'te_fode@nao_enche_o_saco.com.br'
    }
  },
  servers: [
    {
      url: '/v1'
    }
  ],
  apis: ['src/**/*.js', 'src/**/*.yml'],
  tags: [
    {
      name: 'user',
      description: 'SA ERP - User authentication'
    }
  ],
  consumes: ['application/json'],
  produces: ['application/json'],
  components: {
    securitySchemes: {
      Apikey: {
        type: 'apiKey',
        description: 'Api-Key Authentication',
        name: 'authorization',
        in: 'header',
        schemes: ['http', 'https']
      },
      Bearer: {
        type: 'apiKey',
        description: 'Bearer Authentication',
        name: 'authorization',
        in: 'header',
        schemes: ['http', 'https']
      }
    }
  }
}