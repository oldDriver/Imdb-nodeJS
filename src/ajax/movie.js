var models  = require('./../../models');

exports.post = function (req, res, genre2) {
    genre2 = genre2 || genre;
    var total = 0;
    var limit = req.body.paging;
    var page = req.body.page || 1;
    var offset = (page - 1) * limit;
    var order = req.body.orderby || 'year';
    var direction = req.body.direction;
    var genreId = req.body.genreId || null;
    var filter = {
        where: {},
        limit: limit,
        offset: offset,
        order: order + ' ' + direction
    };
    //if (genreId) {
    //    models.Genre.find(req.body.genreId).then(function(genre){
    //        console.log(genre);
    //        //genre.getMovies(function(movies){
    //        //    console.log(movies);
    //        //});
    //    });
    //} else {
        models.Movie.findAndCountAll(filter).then(function (result) {
            res.json({total: result.count, data: result.rows});
        });
    //}
};

