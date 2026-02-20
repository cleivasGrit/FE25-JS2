"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const songroutes_1 = require("./songroutes");
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
exports.app.use((0, cors_1.default)());
exports.app.use('/songs', songroutes_1.songRouter);
exports.app.use((req, res) => {
    res.status(404).json({ message: 'Not found.' });
});
exports.app.use((error, req, res, next) => {
    console.log(error);
    res.status(500).json({ message: 'Internal server error. Selfdestruction initiated.' });
});
