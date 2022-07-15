import { Request, Response, NextFunction } from "express";

import { TokenUser } from "../controllers/accessController.js";
import { getCredentialById } from "../repositories/credentialRepository.js";

export default async function checkCredentialId(req: Request, res: Response, next: NextFunction) {
    const credentialId: number | undefined = res.locals.id;
    if(!credentialId) return next();

    const user: TokenUser = res.locals.user;
    const credential = await getCredentialById(credentialId);
    if(!credential) return res.status(404).send("Not found");
    if(user.id !== credential.userId) return res.status(401).send("Not allowed");

    res.locals.credential = credential;

    next();
}