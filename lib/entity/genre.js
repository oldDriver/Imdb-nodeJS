var Sequelize = require('sequelize');
var sequelize = require('../databases/mysqlDb');

var Genre = sequelize.define(
    'genre',
    {
        genre: { type: Sequelize.STRING }
    },
    {
        tableName: 'genre'
    }
);

module.exports = Genre;