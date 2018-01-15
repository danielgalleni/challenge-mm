/**
 * Routes defined for access to CRUD of the CPFs
 */

"use strict";

const router = require('express').Router();
const controller = require('../controllers/cpfs-controller');

router.route('/cpfs', controller)
    .get(controller.getAll)
    .post(controller.post);

router.route('/cpfs/:cpfId', controller)
    .get(controller.get)
    .put(controller.put)
    .delete(controller.delete);

module.exports = router;