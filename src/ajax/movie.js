var Movie = require('./../../lib/entity/movie');
var Genre = require('./../../lib/entity/genre');

exports.post = function(req, res) {
    var total = 0;
    var limit = req.body.paging;
    var page = req.body.page || 1;
    var offset = (page -1) * limit;
    var order = req.body.orderby || 'year';
    var direction = req.body.direction;
    var filter = {
        where: { },
        limit: limit,
        offset: offset,
        order: order + ' ' + direction
    };

    Movie.findAndCountAll(filter).then(function(result){
        res.json({total: result.count, data:result.rows});
    });
};

