"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const shortUrl_1 = require("../Controller/shortUrl");
const router = express_1.default.Router();
router.get('/allShortUrl', shortUrl_1.getAllUrl);
router.post('/createShortUrl', shortUrl_1.createUrl);
router.get('/shortUrl/:id', shortUrl_1.getUrl);
router.delete('/deleteShortUrl/:id', shortUrl_1.deleteUrl);
exports.default = router;
