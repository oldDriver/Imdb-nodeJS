"use strict";

module.exports = function(sequelize, DataTypes) {
    var Genre = sequelize.define("Genre", {
        genre: DataTypes.STRING

    }, {
        tableName: 'genre'
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
                Genre.belongsToMany(models.Movie, {
                    through: 'movie_genre_ref'
                });
            }
        }
    });
    return Genre;
};