const cnnStr = "Server=@SRV;Database=@DBA;User Id=@USR;Password=@PWS;"
const sql = require('mssql')
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
    // return new Promise((resolve, reject) => {
    //     const url = `${config.mosia.apiUrl}${servico}`
    //     const auth = {}
    //     const headers = {
    //       authorization: config.telemedicina.mosiaApiKey,
    //     }

    //     restRequest(url, metodo, auth, headers, data, timeout)
    //       .then((response) => {
    //         resolve(response)
    //       })
    //       .catch((err) => {
    //         reject(err)
    //       })
    //   }) 

    return new Promise((resolve, reject) => {
        let ret = cnnStr

        validator(cfg.servers.server1.type)
            .then((ret) => console.log(ret))
            .catch((err) => console.log(err))

        ret = ret.replace('@SRV', cfg.servers.server1.host)
            .replace('@DBA', cfg.servers.server1.database)
            .replace('@USR', cfg.servers.server1.user)
            .replace('@PWS', cfg.servers.server1.password);


        console.log(ret)

        resolve()

        // sql.connect(connStr)
        // .then(conn => console.log('MS SQL Server connected successfuly'))
        // .catch(err => console.log('Error connecting in MS SQL Server. Err: ' + err))
    })
}