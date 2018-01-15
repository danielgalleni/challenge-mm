"use strict";

const express = require('express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const cors = require('cors');
const routes = require('../routes');

/**
 * Setting service standards
 */
module.exports = function() {
    const app = express();
    
    app.use(cors());
    app.use(expressValidator());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(routes);

    return app;
};