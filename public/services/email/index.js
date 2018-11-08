const Logger = require('../../../lib/logger');
const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'developer.amirsaleem@gmail.com',
        pass: '#Lm%d0642cd'
    }
});

// transporter.verify(function(error, success) {
//     if (error) {
//         Logger.error(error);
//     } else {
//          Logger.log('Server is ready to take our messages');
//     }
// });

class Email {
    static sendMail (mailOptions) {
        transporter.sendMail(mailOptions, function (err, info) {
            if (err) {
                console.log(err);
            } else {
                console.log(info);
            }
        });
    }
}

module.exports = Email;