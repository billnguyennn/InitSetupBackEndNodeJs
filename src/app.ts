import { getEnv, getEnvF } from "./config";
import { startServer } from "./server";

async function main() {
    await startServer(parseInt(getEnv('SERVER_PORT')));
}

main();
