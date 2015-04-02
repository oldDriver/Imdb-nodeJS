var models  = require('./../../../models');

exports.get = function(req, res, next) {
    models.Person.find(req.params.id).on('success', function(person){
        res.render('frontend/person_view', {
            person: person
        });
    });

};
