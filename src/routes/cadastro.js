const express = require('express');
const routes = express.Router();
const controller = require('../controller/cadastro');

routes.post('/save-data', controller.save);
routes.get('/get-data', controller.get);
routes.post('/filter-data/:filtro', controller.getWhere);
routes.put('/update-data', controller.update);
routes.delete('/delete-data/:id', controller.delete);
routes.post('/upd-data', controller.updtHora);


module.exports = routes;