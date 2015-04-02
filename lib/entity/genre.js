var Sequelize = require('sequelize');
var sequelize = require('../databases/mysqlDb');
var Movie = require('./movie');

var Genre = sequelize.define(
    'genre',
    {
        genre: { type: Sequelize.STRING }
    },
    {
        tableName: 'genre'
    }
);

Genre.hasMany(Movie, { as: 'movies', through: 'movie_genre_ref', foreignKey: 'genre_id'});

module.exports = Genre;