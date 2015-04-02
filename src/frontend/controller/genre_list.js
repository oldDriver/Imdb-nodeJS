var models  = require('./../../../models');

exports.get = function(req, res) {
    models.Genre.all({order: 'genre'}).then(function(genres){
        res.render(
            'frontend/genre_list',
            {
                genres: genres
            }
        );
    });
};
