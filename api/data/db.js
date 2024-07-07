
const {Sequelize} = require ("sequelize")
const config = require ("../config/db.js")

const db = new Sequelize (config.DB_NAME, config.DB_USERNAME, config.DB_PASSWORD,{
    host : config.DB_HOST,
    dialect: config.DB_DIALECT,
    port: config.DB_PORT,
    logging: config.DB_LOGGING,
    sync: { force: true }
})

module.exports = db


