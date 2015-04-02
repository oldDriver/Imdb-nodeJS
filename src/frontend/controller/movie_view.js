var models  = require('./../../../models');

exports.get = function(req, res, next) {
    models.Movie.find(req.params.id).then(function(movie){
        res.render('frontend/movie_view', {
            movie: movie
        });
    });
};
