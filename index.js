const app = require('./public/app');
const port = process.env.PORT || 5000;
const Logger = require('./lib/logger');
require('./public/routes');
require('./public/middlewares');
const express = require('express');
app.use(express.static('public'));
app.listen(port, () => {
    Logger.generic(`Server listening to port: ${port}`);
});