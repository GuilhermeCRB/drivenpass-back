import { Request, Response } from "express";

import { InputCredential } from "../schemas/credentialSchema.js";

export async function createCredential(req: Request, res: Response) {
    const credential: InputCredential = res.locals.data;
    console.log(credential)
    return res.sendStatus(200);
}