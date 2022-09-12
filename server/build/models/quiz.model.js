"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const QuizSchema = new mongoose_1.Schema({
    resource: {
        type: String,
        required: true,
    },
    question: {
        type: String,
        required: true,
    },
    options: {
        type: [String],
        required: true,
    },
    correct: {
        type: Number,
        required: true,
    },
});
const QuizModel = (0, mongoose_1.model)("Quiz", QuizSchema);
exports.default = QuizModel;
