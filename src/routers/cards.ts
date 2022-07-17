import { Router } from "express";

import { createCard } from "../controllers/cardController.js";
import isLabelUnique from "../middlewares/isLabelUnique.js";
import validateToken from "../middlewares/validateToken.js";
import { sanitizeCard } from "../middlewares/sanitizeCard.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { cardSchema } from "../schemas/cardSchema.js";

const cards = Router();

cards.post("/cards",
    validateToken,
    sanitizeCard,
    validateSchema(cardSchema),
    isLabelUnique,
    createCard
);

cards.get("/cards",

);

cards.delete("/cards/:id",

);

export default cards;