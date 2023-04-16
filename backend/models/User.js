"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    email: { type: String, required: [true, "Please add email"], unique: true },
    password: {
        type: String,
        required: [true, "Please add Password"],
    },
    userName: {
        type: String,
        required: [true, "Please add userName"],
        unique: true,
    },
    createdAt: String,
});
const User = mongoose_1.default.model("User", userSchema);
exports.default = User;
