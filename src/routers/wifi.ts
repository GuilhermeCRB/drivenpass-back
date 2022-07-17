import { Router } from "express";

import { createWiFi, eraseWiFi, findWifi } from "../controllers/wiFiController.js";
import validateToken from "../middlewares/validateToken.js";
import isLabelUnique from "../middlewares/isLabelUnique.js";
import { sanitizeId } from "../middlewares/sanitizeId.js";
import { sanitizeWiFi } from "../middlewares/sanitizeWiFi.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { wiFiSchema } from "../schemas/wiFiSchema.js";
import checkEntityId from "../middlewares/checkEntityId.js";

const wifi = Router();

wifi.post("/wi-fi",
    validateToken,
    sanitizeWiFi,
    validateSchema(wiFiSchema),
    isLabelUnique,
    createWiFi
);

wifi.get("/wi-fi",
    validateToken,
    sanitizeId,
    checkEntityId,
    findWifi
);

wifi.delete("/wi-fi/:id",
    validateToken,
    sanitizeId,
    checkEntityId,
    eraseWiFi
);

export default wifi;