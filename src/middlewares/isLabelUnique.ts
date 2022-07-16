import { Request, Response, NextFunction } from "express";

import { getEntityByLabel } from "../repositories/entityRepository.js";

export default async function isLabelUnique(req: Request, res: Response, next: NextFunction) {
    const { label }: { label: string } = res.locals.data;
    const entity: string = res.locals.entity;
    const credential = await getEntityByLabel(entity, label);

    if(credential) return res.status(409).send("Label is already being used");
    
    next();
}