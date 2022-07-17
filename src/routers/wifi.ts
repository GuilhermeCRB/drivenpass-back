import { Router } from "express";
import { createWiFi } from "../controllers/wiFiController.js";

import { sanitizeWiFi } from "../middlewares/sanitizeWiFi.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import validateToken from "../middlewares/validateToken.js";
import { wiFiSchema } from "../schemas/wiFiSchema.js";

const wifi = Router();

wifi.post("/wi-fi",
    validateToken,
    sanitizeWiFi,
    validateSchema(wiFiSchema),
    createWiFi
);

wifi.get("/wi-fi",

);

wifi.delete("/wi-fi/:id",

);

export default wifi;