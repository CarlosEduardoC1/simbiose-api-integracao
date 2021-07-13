const { request } = require('express');
const express = require('express');
const routes = express.Router();

const authRouter = require('./src/routes/auth');

routes.use('/auth', authRouter);


module.exports = routes;