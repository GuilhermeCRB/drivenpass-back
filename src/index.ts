import cors from "cors";
import express, { json } from "express";
import "express-async-errors";
import dotenv from "dotenv";
import chalk from "chalk";

dotenv.config();

const app = express();
app.use(json());
app.use(cors());

const port = +process.env.PORT || 5000;
app.listen(port, () => {
    console.log(chalk.white.bold.bgGreenBright(`\n Application is running on port ${port}... \n`));
});