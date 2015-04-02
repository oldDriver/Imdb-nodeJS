"use strict";

module.exports = function(sequelize, DataTypes) {
    var Job = sequelize.define("Job", {
        job: DataTypes.STRING

    }, {
        tableName: 'job',
        classMethods: {
            associate: function(models) {
                // associations can be defined here
                Job.belongsToMany(models.Person, {
                    as: 'persons',
                    through: 'person_job_ref',
                    foreignKey: 'job_id'
                });
            }
        }
    });
    return Job;
};