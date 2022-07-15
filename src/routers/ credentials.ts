import { Router } from "express";
import validateToken from "../middlewares/validateToken.js";

const credentials = Router();

credentials.post("/credentials", validateToken);

export default credentials;