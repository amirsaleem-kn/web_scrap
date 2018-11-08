const chalk = require('chalk');
const environment = process.env.NODE_ENV;
const error = chalk.bold.red;
const warning = chalk.keyword('orange');
class Logger {
    static generic (message) {
        console.log(message);
    }
    static log (message) {
        if(environment != 'production'){
            console.log(message);
        }
    }
    static highlight (message, color = 'green') {
        if(environment != 'production'){
            console.log(chalk.keyword(color)(message));
        }
    }
    static error (message) {
        if(typeof message == 'string'){
            console.error(error(`[Error]: ${message}`));
        } else {
            console.error(error(message));
        }
    }
    static warning (message) {
        if(environment != 'production'){
            console.log(warning(`[Warning]: ${message}`));
        }
    }
}

module.exports = Logger;