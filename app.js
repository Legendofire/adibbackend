const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const api = require('./routes/api');
const authMiddleware = require('./middlewares/authentication');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Middleware fo checking
app.all('/api/*', authMiddleware.isAuthenticated);

app.use('/', api);

module.exports = app;
