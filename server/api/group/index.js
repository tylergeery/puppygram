'use strict';

var express = require('express');
var controller = require('./group.controller');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/', controller.index);
router.get('/mygroups', auth.isAuthenticated(), controller.getMyGroups);
router.get('/:id', controller.show);
router.get('/:id/user', controller.getUserGroups);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;