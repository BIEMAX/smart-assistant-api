const express = require('express')
//const msSql = require('./lib/MsSqlConnector')
const cfg = require('./config/GeneralConfig')

var app = express()

// app.get('/', function (req, res) {
//     // res.send(`Hello world`)
// })

//console.log(msSql())

//Call and define the routes of API and pass with parameter the app (application)
require('./routes')(app)

app.listen(cfg.customer.port, function () {
    console.log('-----------------------------------------------------------------------------------')
    console.log(`Api app listening on the port ${cfg.customer.port} in ${Date()}`)
    console.log('-----------------------------------------------------------------------------------')
})

module.exports = app;