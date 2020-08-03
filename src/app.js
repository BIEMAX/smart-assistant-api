const helmet = require('helmet')                // Secure various HTTP headers
const express = require('express')              //Set express as Node.js web application server framework.
const bodyParser = require('body-parser')       //Body parser to requests/responses
const morgan = require('morgan')
const app = express()                           //Start server


const cfg = require('./config/GeneralConfig')   //General definitions

//Ms SQL connection
//const msSql = require('./lib/MsSqlConnector')

// Embedded Javascript templating, allow generate HTML marks with javascript.
app.set('view engine', 'ejs')
app.use(morgan('dev'))
app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }))
app.use(helmet())

//Call and define the routes of API and pass with parameter the app (application)
require('./routes')(app)

// catch 404 and forward to error handler
app.use(function (req, res) {
    res.status(404).json({
        mensagem: 'Recurso não encontrado',
    })
})

//Start listening server
app.listen(cfg.customer.port, function () {
    console.log('-----------------------------------------------------------------------------------')
    console.log(`Api app listening on the port ${cfg.customer.port} in ${Date()}`)
    console.log('-----------------------------------------------------------------------------------')
})

module.exports = app;