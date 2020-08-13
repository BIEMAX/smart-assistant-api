const cnnStr = "Server=@SRV;Database=@DBA;User Id=@USR;Password=@PWS;"
const sql = require('mssql')
const async = require('async')
const cfg = require('../config/GeneralConfig')
const validator = require('./CheckValue')


/**
 * @MsSqlConnector
 *
 * Consome endpoints REST
 *
 * @param {string} query endpoint URL
 * @param {string} dictionary  Endpoint service
 * @param {boolean} runTransaction Milliseconds before timing out request
 * @promise response
 * @reject {error}
 * @fulfill {body,statusCode}
 * @returns {Promise{body,statusCode}}
 *
 */
module.exports = (query, dictionary = undefined, runTransaction = false) => {
    return new Promise((resolve, reject) => {
        async.waterfall(
            [
                (done) => {
                    let cnnStrWithValues = cnnStr

                    validator(cfg.servers.server1.type)
                        .then((ret) => console.log(ret))
                        .catch((err) => console.log(err))

                    cnnStrWithValues = cnnStr.replace('@SRV', cfg.servers.server1.host)
                        .replace('@DBA', cfg.servers.server1.database)
                        .replace('@USR', cfg.servers.server1.user)
                        .replace('@PWS', cfg.servers.server1.password)


                    console.log(cnnStrWithValues)

                    sql.connect(cnnStrWithValues, done)
                },
                (conn, done) => {
                    conn.exports(query, dictionary)
                        .then((result) => {
                            let payload = result.rows
                            resolve(payload)
                        })
                        .catch((err) => {
                            done(new Error(err))
                        })
                },
                (err, conn) => {
                    if (conn) conn.close()
                    reject(err)
                }
            ]
        )

        //resolve()

        sql.connect(connStr)
        // .then(conn => console.log('MS SQL Server connected successfuly'))
        // .catch(err => console.log('Error connecting in MS SQL Server. Err: ' + err))
    })
}