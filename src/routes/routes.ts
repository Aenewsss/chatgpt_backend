import { Router } from "express";
const routes: Router = require('express').Router();
const promptController = require('../controllers/prompt.controller')

routes.post('/api/prompt', promptController.sendText)

module.exports = routes;