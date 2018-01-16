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

router.route('/cpfs/list/block', controller)
    .get(controller.countBlackList);

router.route('/cpfs/list/free', controller)
    .get(controller.countFreeList);

router.route('/cpfs/:cpf/block')
    .put(controller.blockByCpf);

router.route('/cpfs/:cpf/free')
    .put(controller.freeByCpf);

router.route('/status/:cpf')
    .get(controller.statusCpf);

module.exports = router;