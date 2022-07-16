import Cryptr from "cryptr";
import { Response } from "express";
import { Credential } from "@prisma/client";

import { TokenUser } from "../controllers/accessController.js";
import { deleteCredential, getCredentials, saveEntity } from "../repositories/credentialRepository.js";
import { InputCredential } from "../schemas/credentialSchema.js";

export async function postCredential(inputCredential: InputCredential, res: Response) {
    const user: TokenUser = res.locals.user;
    const entity: string = res.locals.entity;
    const credentialInputs: InputCredential = res.locals.data;
    const credential = formatCredential(credentialInputs, user.id);
    await saveEntity(entity, credential);
}

function formatCredential(credentialInputs: InputCredential, userId: number) {
    const cryptr = new Cryptr(process.env.CRYPTR_KEY);
    const encrytedPassword = cryptr.encrypt(credentialInputs.password);

    return ({
        ...credentialInputs,
        password: encrytedPassword,
        userId
    });
}

export function decryptCredential(credentials: Credential[]) {
    const cryptr = new Cryptr(process.env.CRYPTR_KEY);

    return credentials.map(credential => {
        const decryptedPassword = cryptr.decrypt(credential.password);
        return { ...credential, password: decryptedPassword };
    });
}

export async function getDecryptedCredentials(entity: string, userId: number) {
    const credentials = await getCredentials(entity, userId);
    return decryptCredential(credentials);
}

export async function eraseUserCredential(entity: string, id: number) {
    await deleteCredential(entity, id);
}