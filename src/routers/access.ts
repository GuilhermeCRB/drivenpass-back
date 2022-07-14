import { Router } from "express";

import { signUp } from "../controllers/accessController.js";

const access = Router();

access.post("/sign-up", signUp);

export default access;