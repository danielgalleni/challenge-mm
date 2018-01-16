/**
 * Routes defined for access to CRUD of each resource
 */

"use strict";

const router = require('express').Router();
const config = require('./config/global-setting')

// Resources constants
const CpfsRoutes = require('./resources/routes/cpfs-routes');

// Resources routes
router.use(CpfsRoutes);

// Default routes
router.get('/', function (req, res) {
    config.TOTAL_HITS++;
    res.status(200).json('CPF API ping test');
});

router.get('/Ping', function (req, res) {
    config.TOTAL_HITS++;
    res.status(200).json('CPF API ping teste');
});

router.get('/Status', function (req, res) {
    config.TOTAL_HITS++;
    let status = {
        TotalRequest: config.TOTAL_HITS,
        upTime: Date.now() - config.UPTIME,
        cpfAtBlackList: 0
    };
    res.status(200).json(status);
});

// catch 404 and forward to error handler
router.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

module.exports = router;