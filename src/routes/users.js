const express = require('express');
const routes = express.Router();
const http = require('http');
const controller = require('../controller/users');

routes.post('/save-user', controller.save);
routes.get('/get-user', controller.get);
routes.delete('/delete-user/:cpf', controller.delete);
routes.post('/verify-user', controller.verifyMAil);
routes.post('/auth', controller.auth);
routes.post('/my-id', controller.getId);


module.exports = routes;