"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const dbConnection_1 = __importDefault(require("./config/dbConnection"));
const cors_1 = __importDefault(require("cors"));
const shortUrl_1 = __importDefault(require("./routes/shortUrl"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5001;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/api/', shortUrl_1.default);
app.use((0, cors_1.default)({
    origin: `${process.env.LOCAL_URL}`,
    credentials: true
}));
app.listen(5001, () => {
    console.log("Server Runing Successfully....!!!" + PORT);
    (0, dbConnection_1.default)();
});
app.get('/hello', (req, res) => {
    res.send({ message: "Hello World" });
});
