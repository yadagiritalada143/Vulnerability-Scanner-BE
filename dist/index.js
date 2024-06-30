"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const express_session_1 = __importDefault(require("express-session"));
const commonRoutes_1 = __importDefault(require("./routes/commonRoutes"));
const scannerRoutes_1 = __importDefault(require("./routes/scannerRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
const SECRET_KEY = process.env.SECRET_KEY;
app.use(express_1.default.json());
app.use((0, express_session_1.default)({
    secret: SECRET_KEY,
    resave: false,
    saveUninitialized: false,
}));
app.use((0, morgan_1.default)('dev'));
app.use((0, cors_1.default)({
    exposedHeaders: ["*"]
}));
app.use('/common', commonRoutes_1.default);
app.use('/scan', scannerRoutes_1.default);
app.listen(port, () => {
    console.log(`Server is running at  http://localhost:${port}`);
});
