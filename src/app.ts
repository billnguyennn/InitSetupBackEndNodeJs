import { getEnv } from "./config";
import { startServer } from "./server";

startServer(parseInt(getEnv('SERVER_PORT')));

