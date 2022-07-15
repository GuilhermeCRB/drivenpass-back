import Cryptr from "cryptr";
import { Response } from "express";

import { TokenUser } from "../controllers/accessController.js";
import { saveCredential } from "../repositories/credentialRepository.js";
import { InputCredential } from "../schemas/credentialSchema.js";

export async function postCredential(inputCredential: InputCredential, res: Response) {
    const user: TokenUser = res.locals.user;
    const credentialInputs: InputCredential = res.locals.data;
    const credential = formatCredential(credentialInputs, user.id);
    await saveCredential(credential);
}

function formatCredential(credentialInputs: InputCredential, userId: number){
    const cryptr = new Cryptr(process.env.CRYPTR_KEY);
    const encrytedPassword = cryptr.encrypt(credentialInputs.password);

    return({
        ...credentialInputs,
        password: encrytedPassword,
        userId
    });
}