import Cryptr from "cryptr";
import { Response } from "express";
// import { Credential } from "@prisma/client";

import { InputWiFi } from "../schemas/wiFiSchema.js";
import { TokenUser } from "../controllers/accessController.js";
import { deleteEntity, getEntities, saveEntity } from "../repositories/entityRepository.js";

export async function postWiFi(res: Response) {
    const user: TokenUser = res.locals.user;
    const entity: string = res.locals.entity;
    const wiFiInputs: InputWiFi = res.locals.data;
    const wiFi = formatWiFi(wiFiInputs, user.id);
    await saveEntity(entity, wiFi);
}

function formatWiFi(wiFiInputs: InputWiFi, userId: number) {
    const cryptr = new Cryptr(process.env.CRYPTR_KEY);
    const encrytedPassword = cryptr.encrypt(wiFiInputs.password);

    return ({
        ...wiFiInputs,
        password: encrytedPassword,
        userId
    });
}

// export function decryptCredential(credentials: Credential[]) {
//     const cryptr = new Cryptr(process.env.CRYPTR_KEY);

//     return credentials.map(credential => {
//         const decryptedPassword = cryptr.decrypt(credential.password);
//         return { ...credential, password: decryptedPassword };
//     });
// }

// export async function getDecryptedCredentials(entity: string, userId: number) {
//     const credentials = await getEntities(entity, userId);
//     return decryptCredential(credentials);
// }

// export async function eraseUserCredential(entity: string, id: number) {
//     await deleteEntity(entity, id);
// }