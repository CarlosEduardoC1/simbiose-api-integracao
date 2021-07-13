const express = require('express');
const routes = express.Router();
const http = require('http');
const controller = require('../controller/arquivo');

routes.post('/save-archive', controller.save);
routes.get('/get-archive', controller.get);
routes.delete('/delete-archive/:id', controller.delete);


module.exports = routes;