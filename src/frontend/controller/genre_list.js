var Genre = require('../../../lib/entity/genre');

exports.get = function(req, res) {
    Genre.all({order: 'genre'}).then(function(genres){
        res.render(
            'frontend/genre_list',
            {
                genres: genres
            }
        );
    });
};
