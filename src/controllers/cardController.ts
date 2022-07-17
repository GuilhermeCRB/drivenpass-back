import { Request, Response } from "express";
import { Card } from "@prisma/client";

import { decryptCard, eraseUserCard, getDecryptedCard, postCard } from "../services/cardService.js";

export async function createCard(req: Request, res: Response) {
    await postCard(res);
    return res.sendStatus(201);
}

export async function findCard(req: Request, res: Response) {
    const card: Card | undefined = res.locals.entityData;
    const { id }: { id: number } = res.locals.user;

    if (card) {
        const decryptedCard = decryptCard([card]);
        return res.status(200).send(decryptedCard[0]);
    } else {
        const entity: string = res.locals.entity;
        const cardArray = await getDecryptedCard(entity, id);
        return res.status(200).send(cardArray);
    }
}

export async function eraseCard(req: Request, res: Response) {
    const id: number = res.locals.id;
    const entity: string = res.locals.entity;
    await eraseUserCard(entity, id);
    return res.sendStatus(204);
}