import { Router } from "express";

import { signUp } from "../controllers/accessController.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import userSchema from "../schemas/userSchema.js";

const access = Router();

access.post("/sign-up", validateSchema(userSchema), signUp);

export default access;