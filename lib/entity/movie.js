var Sequelize = require('sequelize');
var sequelize = require('../databases/mysqlDb');
var Genre = require('./genre');

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

Movie.hasMany(Genre, {as: 'genres', through: 'movie_genre_ref', foreignKey: 'movie_id'});

module.exports = Movie;