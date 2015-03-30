var User = require('../../../lib/entity/user');

exports.get = function(req, res) {
    User.all({order: "username", limit: 10}, function(err, results){
        if (err) throw err;
        console.log(results);
    });
    res.render('frontend/index');
};
