let env = process.env.NODE_ENV || "development";


//configuration of an app
let config = {};


config.development = {

    "databaseUrl": process.env.DATABASE_URL || "mongodb://localhost:27017/gateway",
    
}


module.exports = config[env];