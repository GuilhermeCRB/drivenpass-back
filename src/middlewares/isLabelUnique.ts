import { Request, Response, NextFunction } from "express";

import { getEntityByLabel } from "../repositories/entityRepository.js";

export default async function isLabelUnique(req: Request, res: Response, next: NextFunction) {
    const { label }: { label: string } = res.locals.data;
    const entity: string = res.locals.entity;
    const entityData = await getEntityByLabel(entity, label);

    if(entityData) return res.status(409).send("Label is already being used");
    
    next();
}