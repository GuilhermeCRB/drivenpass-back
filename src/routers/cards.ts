import { Router } from "express";

import { createCard, findCard } from "../controllers/cardController.js";
import isLabelUnique from "../middlewares/isLabelUnique.js";
import validateToken from "../middlewares/validateToken.js";
import { sanitizeCard } from "../middlewares/sanitizeCard.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { cardSchema } from "../schemas/cardSchema.js";
import { sanitizeId } from "../middlewares/sanitizeId.js";
import checkEntityId from "../middlewares/checkEntityId.js";

const cards = Router();

cards.post("/cards",
    validateToken,
    sanitizeCard,
    validateSchema(cardSchema),
    isLabelUnique,
    createCard
);

cards.get("/cards",
    validateToken,
    sanitizeId,
    checkEntityId,
    findCard
);

cards.delete("/cards/:id",

);

export default cards;