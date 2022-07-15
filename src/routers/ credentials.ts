import { Router } from "express";

import { createCredential, findCredentials } from "../controllers/credentialsController.js";
import { sanitizeCredential } from "../middlewares/sanitizeCredential.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { credentialSchema } from "../schemas/credentialSchema.js";
import { sanitizeId } from "../middlewares/sanitizeId.js";
import validateToken from "../middlewares/validateToken.js";
import isLabelUnique from "../middlewares/isLabelUnique.js";
import checkCredentialId from "../middlewares/checkCredentialId.js";

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
    checkCredentialId,
    findCredentials
);

export default credentials;