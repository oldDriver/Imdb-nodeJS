var Movie = require('./../../lib/entity/movie');
var async = require('async');

exports.post = function(req, res) {
    var total = 0;
    var limit = req.body.paging;
    var page = req.body.page || 1;
    var offset = (page -1) * limit;
    var order = req.body.orderby || 'year';
    var direction = req.body.direction;
    var where = {

    };
    var filter = {
        limit: limit,
        offset: offset,
        order: order + ' ' + direction
    };

    async.parallel(
        [
            function(callback){
                Movie.count(function(err, result) {
                    if (err) callback(err, null);
                    callback(null, result);
                }, where)
            },
            function(callback){
                Movie.all(filter, function(err, results){
                    if (err) throw callback(err, {});
                    callback(null, results);
                })
            }
        ],
        // optional callback
        function(err, results){
            res.json({total: results[0], data:results[1]});
        }
    );
};

