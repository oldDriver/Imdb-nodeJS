"use strict";

module.exports = function(sequelize, DataTypes) {
    var Job = sequelize.define("Job", {
        job: DataTypes.STRING

    }, {
        tableName: 'job'
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
            }
        }
    });
    return Job;
};