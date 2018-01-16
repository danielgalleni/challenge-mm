/**
 * Routes defined for access to CRUD of each resource
 */

"use strict";

const router = require('express').Router();
const config = require('./config/global-setting')

// Resources constants
const CpfsRoutes = require('./resources/routes/cpfs-routes');
const CpfsModel = require('./resources/models/cpfs-model');

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

// Route status
router.get('/Status', function (req, res) {
    config.TOTAL_HITS++;
    let status;
    
    CpfsModel.count({ where: {'blackList': "block" }}).then(c => {
        status = {
            TotalRequest: config.TOTAL_HITS,
            upTime: Date.now() - config.UPTIME,
            cpfAtBlackList: c
        };
        return res.status(200).json(status);
    });
});

// catch 404 and forward to error handler
router.use((req, res, next) => {
    const err = new Error('Route not found');
    err.status = 404;
    next(err);
});

module.exports = router;