"use strict";

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        username: { type: DataTypes.STRING },
        username_canonical: { type: DataTypes.STRING },
        email: { type: DataTypes.STRING },
        email_canonical: { type: DataTypes.STRING },
        enabled: { type: DataTypes.BOOLEAN },
        salt: { type: DataTypes.STRING },
        password: { type: DataTypes.STRING },
        last_login: { type: DataTypes.DATE },
        locked: { type: DataTypes.BOOLEAN },
        expired: { type: DataTypes.BOOLEAN },
        expires_at: { type: DataTypes.DATE },
        confirmation_token: { type: DataTypes.STRING },
        password_requested_at: { type: DataTypes.DATE },
        roles: { type: DataTypes.TEXT },
        credential_expired: { type: DataTypes.BOOLEAN },
        credential_expired_at: { type: DataTypes.DATE }

    }, {
        tableName: 'user'
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
            }
        }
    });
    return User;
};