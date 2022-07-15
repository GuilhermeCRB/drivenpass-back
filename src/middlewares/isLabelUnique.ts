import { Request, Response, NextFunction } from "express";

import { getCredentialByLabel } from "../repositories/credentialRepository.js";

export default async function isLabelUnique(req: Request, res: Response, next: NextFunction) {
    const { label }: { label: string } = res.locals.data;
    const credential = await getCredentialByLabel(label);

    if(credential) return res.status(409).send("Label is already being used");
    
    next();
}