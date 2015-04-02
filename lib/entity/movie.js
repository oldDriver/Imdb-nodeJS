var Sequelize = require('sequelize');
var sequelize = require('../databases/mysqlDb');

var Movie = sequelize.define(
    'movie',
    {
        imdbId: { type: Sequelize.BIGINT },
        year: { type: Sequelize.INTEGER },
        title: { type: Sequelize.STRING },
        poster: { type: Sequelize.STRING }
    },
    {
        tableName: 'movie'
    }
);

module.exports = Movie;