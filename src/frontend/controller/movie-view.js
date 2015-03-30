var Movie = require('../../../lib/entity/movie');

exports.get = function(req, res) {
    Movie.find(req.params.id, function(err, movie){
        if (err) throw err;
        res.render('frontend/movie_view', {
            movie: movie
        });
    });
};
