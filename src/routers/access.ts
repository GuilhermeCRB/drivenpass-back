import { Router } from "express";

import { signIn, signUp } from "../controllers/accessController.js";
import { isEmailUnique } from "../middlewares/isEmailUnique.js";
import { matchEmailAndPassword } from "../middlewares/matchEmailAndPassword.js";
import { sanitizeUser } from "../middlewares/sanitizeUser.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import userSchema from "../schemas/userSchema.js";

const access = Router();

access.use(sanitizeUser);
access.use(validateSchema(userSchema));
access.post("/sign-up", isEmailUnique, signUp);
access.post("/sign-in", matchEmailAndPassword, signIn);

export default access;