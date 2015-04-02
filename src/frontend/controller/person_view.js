var models  = require('./../../../models');

exports.get = function(req, res, next) {
    models.Person.find(req.params.id).on('success', function(person){
        person.getJobs().then(function(jobs){

        });
        res.render('frontend/person_view', {
            person: person
        });
    });

};
