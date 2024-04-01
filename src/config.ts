export function isDev(): boolean {
    return process.env.ENV === 'dev';
}

export function getEnv(key: string): string {
    const val = process.env[key];

    if (!val) {
        throw new Error(`Environment variable ${key} is not set`);
    }
    return val;
}

export function getEnvF(key: string): string {
    const value = process.env[key];
    if (!value) {
        throw new Error(`Missing environment variable ${key}`);
    }
    return value;
}