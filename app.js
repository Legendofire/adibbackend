const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const banking = require('./routes/banking');
const mail = require('./routes/mail');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/banking', banking);
app.use('/api/mail', mail);

module.exports = app;
