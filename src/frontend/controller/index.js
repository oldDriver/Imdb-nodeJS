exports.get = function(req, res) {
    var genreId = req.params.genreId;
    res.render('frontend/index', {
        genreId: genreId
    });
};
