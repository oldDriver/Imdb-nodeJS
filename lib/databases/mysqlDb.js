var Sequelize = require('sequelize');
var config = require('yaml-config');
var settings = config.readConfig('./../config/mysql.yml');



var sequelize = new Sequelize(settings.database, settings.username, settings.password, {
    host: settings.host,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    define: {
        timestamps: false // true by default
    }
});
//
//
//
//var schema = new Schema('mysql',  {
//    host: settings.host,
//    username: settings.username,
//    password: settings.password,
//    database: settings.database
//});

module.exports = sequelize;
