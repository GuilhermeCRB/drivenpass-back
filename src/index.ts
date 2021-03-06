import cors from "cors";
import express, { json } from "express";
import "express-async-errors";
import dotenv from "dotenv";
import chalk from "chalk";

import router from "./routers/index.js";
import { errorHandlerMiddleware } from "./middlewares/errorHandlerMiddleware.js";

dotenv.config();

const app = express();
app.use(json());
app.use(cors());
app.use(router);
app.use(errorHandlerMiddleware);

const port = +process.env.PORT || 5000;
app.listen(port, () => {
    console.log(chalk.white.bold.bgGreenBright(`\n Application is running on port ${port}... \n`));
});