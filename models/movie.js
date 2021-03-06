"use strict";
module.exports = function(sequelize, DataTypes) {
    var Movie = sequelize.define("Movie", {
        imdbId: DataTypes.INTEGER,
        year: DataTypes.INTEGER,
        title: DataTypes.STRING,
        poster: DataTypes.STRING

    }, {
        tableName: 'movie',
        classMethods: {
            associate: function(models) {
                // associations can be defined here
                Movie.belongsToMany(models.Genre, {
                    as: 'genres',
                    through: 'movie_genre_ref',
                    foreignKey: 'movie_id'
                });
            }
        }
  });
  return Movie;
};