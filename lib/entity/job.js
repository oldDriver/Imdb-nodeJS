var schema = require('../databases/mysqlDb');

var Job = schema.define(
    'movie',
    {
        job: { type: String, length: 255 }
    }
);

module.exports = Job;