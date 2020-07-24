'use strict'
//const check = require('express-validator/check').check

module.exports = (value) => {
    return new Promise((resolve, reject) => {
        if (value == null || value === undefined || value == '' || value.length <= 0)
            reject(new Error('Field "' + eval(value) + '" cannot be null or empty'))
        else resolve(`Value is not null`);
    })
}