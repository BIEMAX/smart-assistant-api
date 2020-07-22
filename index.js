const express = require('express')
const msSql = require('./lib/MsSqlConnector')

var app = express()

app.get('/', function (req, res) { 
    // res.send(`Hello world`)
})

console.log(msSql())

app.listen(8000, function(){
    console.log(`Example app listening the port 8000`)
})

module.exports = app;