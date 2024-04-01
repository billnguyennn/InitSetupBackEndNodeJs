"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEnvF = exports.getEnv = exports.isDev = void 0;
function isDev() {
    return process.env.ENV === 'dev';
}
exports.isDev = isDev;
function getEnv(key) {
    const val = process.env[key];
    if (!val) {
        throw new Error(`Environment variable ${key} is not set`);
    }
    return val;
}
exports.getEnv = getEnv;
function getEnvF(key) {
    const value = process.env[key];
    if (!value) {
        throw new Error(`Missing environment variable ${key}`);
    }
    return value;
}
exports.getEnvF = getEnvF;
