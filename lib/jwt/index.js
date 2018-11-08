const jwt = require('jsonwebtoken');
const settings = require('../../etc/settings');
const { server_key } = require('../../etc/keys')

class JWT {
    static generateJWT(userId, username) {
        const authExpiry = Date.now() + settings.authExpiry;
        return jwt.sign({
            id: userId,
            username: username,
            userId: userId,
            exp: Math.floor(Date.now() / 1000) + 60 * 60
        }, server_key);
    }

    static toAuthJSON(userId, username) {
        return {
            username: username,
            token: this.generateJWT(userId, username),
        };
    }

    static verify (token, callback) {
        jwt.verify(token, server_key, function(err, message){
            callback(err, message);
        });
    }
}

module.exports = JWT;