"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routes = require('express').Router();
const promptController = require('../controllers/prompt.controller');
routes.post('/api/prompt', promptController.sendText);
module.exports = routes;
