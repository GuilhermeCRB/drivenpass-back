import { Request, Response } from "express";
import { Credential } from "@prisma/client";

import { InputCredential } from "../schemas/credentialSchema.js";
import { decryptCredential, eraseUserCredential, getDecryptedCredentials, postCredential } from "../services/creadentialService.js";

export async function createCredential(req: Request, res: Response) {
    const credential: InputCredential = res.locals.data;
    await postCredential(credential, res);
    return res.sendStatus(201);
}

export async function findCredentials(req: Request, res: Response) {
    const credential: Credential | undefined = res.locals.credential;
    const { id }: { id: number } = res.locals.user;

    if (credential) {
        const decryptedCredential = decryptCredential([credential]);
        return res.status(200).send(decryptedCredential[0]);
    } else {
        const credentialsArray = await getDecryptedCredentials(id);
        return res.status(200).send(credentialsArray);
    }
}

export async function eraseCredential(req: Request, res: Response) {
    const id: number = res.locals.id;
    await eraseUserCredential(id);
    return res.sendStatus(200);
}