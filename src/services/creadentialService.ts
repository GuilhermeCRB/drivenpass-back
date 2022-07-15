import Cryptr from "cryptr";
import { Response } from "express";
import { Credential } from "@prisma/client";

import { TokenUser } from "../controllers/accessController.js";
import { deleteCredential, getCredentials, saveCredential } from "../repositories/credentialRepository.js";
import { InputCredential } from "../schemas/credentialSchema.js";

export async function postCredential(inputCredential: InputCredential, res: Response) {
    const user: TokenUser = res.locals.user;
    const credentialInputs: InputCredential = res.locals.data;
    const credential = formatCredential(credentialInputs, user.id);
    await saveCredential(credential);
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

export async function getDecryptedCredentials(userId: number) {
    const credentials = await getCredentials(userId);
    return decryptCredential(credentials);
}

export async function eraseUserCredential(id: number) {
    await deleteCredential(id);
}