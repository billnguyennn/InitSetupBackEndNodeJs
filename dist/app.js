"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
const server_1 = require("./server");
async function main() {
    await (0, server_1.startServer)(parseInt((0, config_1.getEnv)('SERVER_PORT')));
}
main();
