const mysql = require('mysql');
const Logger = require('../../../lib/logger');
const settings = require('../../../etc/settings');
const Email = require('../email');
const poolConfig = {
    user: settings.mysql.user,
    password: settings.mysql.password,
    database: settings.mysql.database,
    host: settings.mysql.host,
    connectionTimeout: settings.mysql.connectionTimeout,
    timeout: settings.mysql.timeout,
    multipleStatements: settings.mysql.multipleStatements,
    connectionLimit: settings.mysql.connectionLimit
}

const pool = mysql.createPool(poolConfig);

class Database {
    static getConnection (callback, retryCount) {
        retryCount ? retryCount = retryCount : retryCount = 0;
        const retryErrorCodes = ['PROTOCOL_CONNECTION_LOST', 'PROTOCOL_SEQUENCE_TIMEOUT'];
        pool.getConnection((err, connection) => {
            if(err) {
                if(retryErrorCodes.indexOf(err.code > -1) && retryCount <= 3){
                    retryCount += 1;
                    return this.getConnection(callback, retryCount)
                }
                handleDBError(err);
                callback(err);
                return;
            }
            callback(null, connection);
        });
    }
    static executeQuery (options, callback) {
        const { connection, query, queryArray } = options;
        connection.query(query, queryArray, (err, data) => {
            if(err) {
                handleDBError(err, connection);
                callback(err);
                return;
            }
            callback(null, data);
        });
    }
    static transactionService (connection, callback) {
        connection.beginTransaction((err) => {
            if(err) {
                handleDBError(err, connection);
                callback(err);
                return;
            }
            callback(null);
        })
    }
    static commitTransaction (connection, callback) {
        connection.commit((err) => {
            if(err) {
                handleDBError(err, connection);
                callback(err);
                return;
            }
            callback(null);
        });
    }
    static rollbackTransaction (connection, callback) {
        connection.rollback(err => {
            if(err) {
                handleDBError(err, connection);
                callback(err);
                return;
            }
            callback();
        })
    }
}

function handleDBError (err, connection) {
    Logger.error(err);
    if(connection){
        connection.release();
    }
    var mailOptions = {
        from: 'developer.amirsaleem@gmail.com',
        cc: 'amirsaleem96@gmail.com',
        to: 'developer.amirsaleem@gmail.com',
        subject: 'Database Error',
        text: err
      };
    //Email.sendMail(mailOptions);
}

module.exports = Database;