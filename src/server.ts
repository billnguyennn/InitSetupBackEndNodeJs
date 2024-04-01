import express from "express";
import cors from 'cors';
import passport from 'passport';
import { getEnv } from './config';

export async function startServer(port: number){
    const app = express();
    app.use(cors({
        origin: getEnv('CORS_ORIGIN'),
        credentials: true,
    }))

    app.use(passport.session());

    app.use(express.json());

    app.get("/health", (req, res) => {
        res.send("OK");
    })
    const v1Router = express.Router();
    app.use('/api/v1', v1Router);
  
    app.listen(port, () => {
        console.log(`Server is listening on port ${port}`);
    });
}
require('dotenv').config();

process.on('uncaughtException', function(err){
    console.log(err);
})