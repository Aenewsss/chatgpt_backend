"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const openai = require('../config/openai');
const InputPrompt = require('../model/input.model');
module.exports = {
    sendText(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const openAI = openai.configuration();
            const inputModel = new InputPrompt(req.body);
            try {
                const response = yield openAI.createCompletion(openai.textCompletion(inputModel));
                return res.status(200).json({ sucess: true, data: response.data.choices[0].text });
            }
            catch (error) {
                return res.status(400).json({
                    sucess: false,
                    error: error.response ? error.response.data : 'tem erro no servidor'
                });
            }
        });
    }
};
