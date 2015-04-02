"use strict";

module.exports = function(sequelize, DataTypes) {
    var Person = sequelize.define("Person", {
        imdbId: DataTypes.INTEGER,
        name: DataTypes.STRING,
        photo: DataTypes.STRING,
        birthAt: DataTypes.DATEONLY,
        deathAt: DataTypes.DATEONLY

    }, {
        tableName: 'person',
        classMethods: {
            associate: function(models) {
                // associations can be defined here
                Person.belongsToMany(models.Job,  {
                    as: 'jobs',
                    through: 'person_job_ref',
                    foreignKey: 'person_id'
                });
            }
        }
  });
  return Person;
};