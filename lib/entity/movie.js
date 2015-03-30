var schema = require('../databases/mysqlDb');

var Movie = schema.define(
    'movie',
    {
        imdbId: { type: Number, dataType: 'bigint' },
        year: { type: Number, dataType: 'mediumint' },
        title: { type: String, length: 255 },
        poster: { type: String, length: 255 }
    }
);

module.exports = Movie;