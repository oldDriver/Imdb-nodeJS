exports.get = function(req, res) {
    var jobId = req.params.jobId;
    res.render('frontend/person_list', {
        jobId: jobId
    });
};
