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
            type: '',
            host: 'DESKTOP-BLV21J1\SQLEX17',
            database: 'Sample_Toolstore_20200',
            user: 'sa',
            password: 'DD01039582dd'
        },
        server2: {
            type: 'ms-sql-server',
            host: 'DESKTOP-BLV21J1\SQLEX17',
            database: 'ECMGR_2020R1',
            user: 'sa',
            password: 'DD01039582dd'
        }
    }
}