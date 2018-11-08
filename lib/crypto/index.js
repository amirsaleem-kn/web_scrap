const crypto = require('crypto');
const fs = require('fs');
const { server_key } = require('../../etc/keys');
class Crypto {

    // method to encrypt a data using RSA public key
    static rsaEncrypt (data) {
        fs.readFile('./etc/keys/public.key', 'utf-8', (err, publicKey) => {
            const buffer = new Buffer(str);
            const encrypted = crypto.publicEncrypt(publicKey, buffer);
            console.log(encrypted.toString('base64'));
            return encrypted.toString('base64');
        });
    }

    // method to decrypt a data using RSA private key
    static rsaDecrypt (data) {
        fs.readFile('./etc/keys/private.key', 'utf-8', (err, privateKey) => {
            const buffer = new Buffer(str, 'base64');
            const decrypted = crypto.privateDecrypt(privateKey, buffer);
            console.log(decrypted.toString('utf8'));
            return decrypted.toString('utf8');
        });
    }

    // encrypt a string to cipher
    static cipherEncrypt (data) {
        var cipher = crypto.createCipher(algorithm, server_key);
        var crypted = cipher.update(str,'utf8','hex');
        crypted += cipher.final('hex');
        return crypted;

    }

    // decrypt a cipher
    static cipherDecrypt (data) {
        var decipher = crypto.createDecipher(algorithm, server_key)
        var dec = decipher.update(str,'hex','utf8')
        dec += decipher.final('utf8');
        return dec;
    }

    // generates a salt
    static createSalt () {
        return crypto.randomBytes(16).toString('hex');
    }

    // create a hash using string and a salt
    static createHash (str, salt) {
        return crypto.pbkdf2Sync(str, salt, 10000, 512, 'sha512').toString('hex');
    }

    // match the hash values
    static validateHash (str, salt, hashValue) {
        const hash = this.createHash(str, salt);
        return hash == hashValue;
    }

    // generate an md5 token
    static generateMD5 (str) {
        return crypto.createHash('md5').update(str).digest('hex');
    }
}

module.exports = Crypto;