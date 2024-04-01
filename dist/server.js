"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServer = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const passport_1 = __importDefault(require("passport"));
const config_1 = require("./config");
async function startServer(port) {
    const app = (0, express_1.default)();
    app.use((0, cors_1.default)({
        origin: (0, config_1.getEnv)('CORS_ORIGIN'),
        credentials: true,
    }));
    app.use(passport_1.default.session());
    app.use(express_1.default.json());
    app.get("/health", (req, res) => {
        res.send("OK");
    });
    const v1Router = express_1.default.Router();
    app.use('/api/v1', v1Router);
    app.listen(port, () => {
        console.log(`Server is listening on port ${port}`);
    });
}
exports.startServer = startServer;
process.on('uncaughtException', function (err) {
    console.log(err);
});
