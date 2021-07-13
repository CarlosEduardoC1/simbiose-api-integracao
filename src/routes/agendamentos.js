const express = require('express');
const routes = express.Router();
const controller = require('../controller/agendamentos');

routes.post('/save-schedule', controller.save);
routes.get('/get-schedule', controller.get);
routes.post('/filter-schedule/:filtro', controller.getWhere);
routes.delete('/delete-schedule/:id', controller.delete);
routes.post('/my-schedule/:cpf', controller.my);


module.exports = routes;