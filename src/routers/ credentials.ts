import { Router } from "express";

import { createCredential, getCredentials } from "../controllers/credentialsController.js";
import { sanitizeCredential } from "../middlewares/sanitizeCredential.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { credentialSchema } from "../schemas/credentialSchema.js";
import { sanitizeId } from "../middlewares/sanitizeId.js";
import validateToken from "../middlewares/validateToken.js";
import isLabelUnique from "../middlewares/isLabelUnique.js";

const credentials = Router();

credentials.post("/credentials",
    validateToken,
    sanitizeCredential,
    validateSchema(credentialSchema),
    isLabelUnique,
    createCredential
);

credentials.get("/credentials",
    validateToken,
    sanitizeId,
    getCredentials
);

export default credentials;