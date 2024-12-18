import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import config from 'config'
import connect from './utils/connect'
import logger from './utils/logger'
import routes from "./routes";

dotenv.config();

const app: Express = express();
const port = config.get<number>('port')

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, async () => {
  logger.info(`[server]: Server is running at http://localhost:${port}`);

  await connect()
  routes(app)
});
