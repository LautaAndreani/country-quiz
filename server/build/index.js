"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const cors_1 = __importDefault(require("cors"));
const quiz_routes_1 = __importDefault(require("./routes/quiz.routes"));
const db_1 = __importDefault(require("./config/db"));
(0, dotenv_1.config)();
const { PORT, MONGODB_URI } = process.env;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//routes 
app.use('/api', quiz_routes_1.default);
(0, db_1.default)(MONGODB_URI).then(() => {
    app.listen(3000, () => {
        console.log(`Server has enabled in PORT ${PORT}`);
    });
});
