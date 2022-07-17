import Cryptr from "cryptr";
import { Response } from "express";
import { Card } from "@prisma/client";

import { InputCard } from "../schemas/cardSchema.js";
import { TokenUser } from "../controllers/accessController.js";
import { deleteEntity, getEntities, saveEntity } from "../repositories/entityRepository.js";

export async function postCard(res: Response) {
    const user: TokenUser = res.locals.user;
    const entity: string = res.locals.entity;
    const cardInputs: InputCard = res.locals.data;
    const card = formatCard(cardInputs, user.id);
    await saveEntity(entity, card);
}

function formatCard(cardInputs: InputCard, userId: number) {
    const cryptr = new Cryptr(process.env.CRYPTR_KEY);
    const encrytedCvv = cryptr.encrypt(cardInputs.cvv);
    const encrytedPassword = cryptr.encrypt(cardInputs.password);

    return ({
        ...cardInputs,
        cvv: encrytedCvv,
        password: encrytedPassword,
        userId
    });
}

export function decryptCard(cards: Card[]) {
    const cryptr = new Cryptr(process.env.CRYPTR_KEY);

    return cards.map(card => {
        const decryptedCvv = cryptr.decrypt(card.cvv);
        const decryptedPassword = cryptr.decrypt(card.password);
        return { ...card, cvv: decryptedCvv, password: decryptedPassword };
    });
}

export async function getDecryptedCard(entity: string, userId: number) {
    const cards = await getEntities(entity, userId);
    return decryptCard(cards);
}

export async function eraseUserCard(entity: string, id: number) {
    await deleteEntity(entity, id);
}