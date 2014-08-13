'use strict';

var express = require('express');
var controller = require('./pet.controller');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/', auth.hasRole('admin'), controller.index);
router.get('/mypets', auth.isAuthenticated(), controller.getMyPets);
router.get('/:id', controller.show);
router.get('/:id/user', controller.getHerPets);
router.post('/', auth.isAuthenticated(), controller.create);
router.put('/:id', auth.isAuthenticated(), controller.update);
router.patch('/:id', auth.isAuthenticated(), controller.update);
router.delete('/:id', auth.isAuthenticated(), controller.destroy);

module.exports = router;