import { Request, Response, NextFunction } from "express";

import { TokenUser } from "../controllers/accessController.js";
import { getEntityById } from "../repositories/entityRepository.js";

export default async function checkEntityId(req: Request, res: Response, next: NextFunction) {
    const entityId: number | undefined = res.locals.id;
    if(!entityId) return next();

    const user: TokenUser = res.locals.user;
    const entity: string = res.locals.entity;
    const entityData = await getEntityById(entity, entityId);
    if(!entityData) return res.status(404).send("Not found");
    if(user.id !== entityData.userId) return res.status(401).send("Not allowed");

    res.locals.entityData = entityData;

    next();
}