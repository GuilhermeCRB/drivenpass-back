import { Request, Response, NextFunction } from "express";
import { stripHtml } from "string-strip-html";

import { InputCard } from "../schemas/cardSchema.js";

export function sanitizeCard(req: Request, res: Response, next: NextFunction) {
    const receivedCard: InputCard = req.body;
    const entity = "card";

    const card: InputCard = {
        ...receivedCard,
        number: stripHtml(receivedCard.number).result,
        label: stripHtml(receivedCard.label).result,
        name: stripHtml(receivedCard.name).result,
        cvv: stripHtml(receivedCard.cvv).result,
        expiringDate: stripHtml(receivedCard.expiringDate).result,
        password: stripHtml(receivedCard.password).result
    }

    res.locals.data = card;
    res.locals.entity = entity;

    next();
}