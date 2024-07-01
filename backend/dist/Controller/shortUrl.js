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
exports.deleteUrl = exports.getAllUrl = exports.getUrl = exports.createUrl = void 0;
const shortUrl_1 = require("../models/shortUrl");
const createUrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { fulUrl } = req === null || req === void 0 ? void 0 : req.body;
        const foundUrl = yield shortUrl_1.urlModel.find({ fulUrl });
        if (foundUrl.length > 0) {
            res.status(409).send({ data: foundUrl });
        }
        else {
            const shortUrl = yield shortUrl_1.urlModel.create({ fulUrl });
            res.status(201).send(shortUrl);
        }
    }
    catch (error) {
        res.status(500).send({ "message": "Something Went Wrong" });
    }
});
exports.createUrl = createUrl;
const getAllUrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allUrls = yield shortUrl_1.urlModel.find();
        if (allUrls.length < 0) {
            res.status(404).send({ "message": "Not Found" });
        }
        else {
            res.status(200).send({ data: allUrls });
        }
    }
    catch (error) {
        res.status(500).send({ "message": "Something Went Wrong" });
    }
});
exports.getAllUrl = getAllUrl;
const deleteUrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        console.log("REQUEST====>>>", req.params.id);
        const data = yield shortUrl_1.urlModel.findByIdAndDelete({ _id: (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id });
        if (data) {
            res.status(404).send({ "message": "We have deleted Successfully" });
        }
    }
    catch (err) {
        res.status(500).send({ "message": "Internal Server Error" });
    }
});
exports.deleteUrl = deleteUrl;
const getUrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const shorturl = yield shortUrl_1.urlModel.findOne({ _id: (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id });
        if (!shorturl) {
            res.status(404).send({ "message": "Not Found Full Url" });
        }
        else {
            shorturl.click++;
            shorturl.save();
            res.redirect(`${shorturl.fulUrl}`);
        }
    }
    catch (err) {
        res.status(500).send({ "message": "Internal Server Error" });
    }
});
exports.getUrl = getUrl;
