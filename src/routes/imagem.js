const express = require('express');
const routes = express.Router();
const http = require('http');
const controller = require('../controller/imagens');

routes.post('/save-data', controller.save);
routes.get('/get-data', controller.get);
routes.delete('/delete-data/:id', controller.delete);


module.exports = routes;