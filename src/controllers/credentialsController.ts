import { Request, Response } from "express";

import { InputCredential } from "../schemas/credentialSchema.js";
import { postCredential } from "../services/creadentialService.js";

export async function createCredential(req: Request, res: Response) {
    const credential: InputCredential = res.locals.data;
    await postCredential(credential, res);
    return res.sendStatus(201);
}

export async function getCredentials(req: Request, res: Response) {
    const id: number = res.locals.id;
    console.log(id)
    
    return res.sendStatus(200);
}