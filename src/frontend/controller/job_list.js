var models  = require('./../../../models');

exports.get = function(req, res) {
    models.Job.all({order: 'job'}).then(function(jobs){
        res.render(
            'frontend/job_list',
            {
                jobs: jobs
            }
        );
    });
};
