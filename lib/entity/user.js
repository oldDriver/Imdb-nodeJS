var crypto = require('crypto');
var async = require('async');
var sequelize = require('../databases/mysqlDb');

var User = sequelize.define(
    'user',
    {
        username: { type: String, length: 255 },
        username_canonical: { type: String, length: 255 },
        email: { type: String, length: 255 },
        email_canonical: { type: String, length: 255 },
        enabled: { type: Number, dataType: 'tinyint' },
        salt: { type: String, length: 255 },
        password: { type: String, length: 255 },
        last_login: { type: Date, dataType: 'datetime' },
        locked: { type: Number, dataType: 'tinyint' },
        expired: { type: Number, dataType: 'tinyint' },
        expires_at: { type: Date, dataType: 'datetime' },
        confirmation_token: { type: String, length: 255 },
        password_requested_at: { type: Date, dataType: 'datetime' },
        roles: { type: String, dataType: 'longtext' },
        credential_expired: { type: Number, dataType: 'tinyint' },
        credential_expired_at: { type: Date, dataType: 'datetime' }
    }
);

User.prototype.encryptPassword = function(password){
    return crypto.createHash('sha512').update(password + this.salt).digest('hex');
};

User.prototype.checkPassword = function(password) {
    return this.encryptPassword(password, this.salt) === this.password;
};

User.prototype.authorize = function(username, password, callback){
    async.waterfall([
        function(callback) {
            return User.findOne({where: {nickname: username}}, callback);
        },
        function(user, callback) {
            if (user) {
                if(user.checkPassword(password)) {
                    console.log(user);
                    callback(null, user);
                } else {
                    callback(403);
                }
            } else {

                return callback(null);
            }
        }
    ], callback);

};

module.exports = User;
