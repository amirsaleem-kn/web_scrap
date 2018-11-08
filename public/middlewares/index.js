const app = require('../app');
const express = require('express');
app.use('../client', express.static(`${__dirname}/public/client`));