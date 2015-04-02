var Movie = require('../../../lib/entity/movie');

exports.get = function(req, res) {
    Movie.find(req.params.id, function(err, movie){
        if (err) throw err;
        //movie.refs(function(err, refs){
        //    console.log(refs);
        //});
        res.render('frontend/movie_view', {
            movie: movie
        });
    });
};
