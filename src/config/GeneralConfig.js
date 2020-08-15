module.exports = {
    app: {
        /**
         * Name of the current aplicatioon
         */
        applicationName: 'Smart Assistant API',
        /**
         * Current version
         */
        version: '1.0.0',
        /**
         * Environment of the server (can be: development, approval or production)
         */
        environment: 'development'
    },
    customer: {
        name: 'Beilke Industries',
        licenseKey: '98sdf67v89y7sd3jdc83843hdfsf83834hsc823',
        availableLicenses: '5',
        port: 3000
    },
    servers: {
        server1: {
            type: 'ms-sql-server',
            host: 'DESKTOP-BLV21J1\\SQLEX17',
            database: 'Sample_Toolstore_20200',
            user: 'sa',
            password: 'DD01039582dd'
        },
        // TODO: #1 Support MongoDB on database connections @BIEMAX
        server2: {
            type: 'mongodb',
            host: 'DESKTOP-BLV21J1\\SQLEX17',
            database: 'ECMGR_2020R1',
            user: 'sa',
            password: 'DD01039582dd'
        },
        // TODO: #2 Support MySQL on database connections @BIEMAX
        server3: {
            type: 'mysql',
            host: 'DESKTOP-BLV21J1\\SQLEX17',
            database: 'ECMGR_2020R1',
            user: 'sa',
            password: 'DD01039582dd'
        },
        // TODO: #3 Support PostGreee SQL on database connections @BIEMAX
        server4: {
            type: 'postgreesql',
            host: 'DESKTOP-BLV21J1\\SQLEX17',
            database: 'ECMGR_2020R1',
            user: 'sa',
            password: 'DD01039582dd'
        },
        //TODO: #4 Support Oracle SQL on database connections @BIEMAX
        server5: {
            type: 'oracle',
            host: 'DESKTOP-BLV21J1\\SQLEX17',
            database: 'ECMGR_2020R1',
            user: 'sa',
            password: 'DD01039582dd'
        }
    }
}