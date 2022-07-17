import Cryptr from "cryptr";
import { Response } from "express";

import { InputCard } from "../schemas/cardSchema.js";
import { TokenUser } from "../controllers/accessController.js";
import { deleteEntity, getEntities, saveEntity } from "../repositories/entityRepository.js";

export async function postCard(res: Response) {
    const user: TokenUser = res.locals.user;
    const entity: string = res.locals.entity;
    const cardInputs: InputCard = res.locals.data;
    const card = formatCard(cardInputs, user.id);
    await saveEntity(entity, card);
}

function formatCard(cardInputs: InputCard, userId: number) {
    const cryptr = new Cryptr(process.env.CRYPTR_KEY);
    const encrytedCvv = cryptr.encrypt(cardInputs.cvv);
    const encrytedPassword = cryptr.encrypt(cardInputs.password);

    return ({
        ...cardInputs,
        cvv: encrytedCvv,
        password: encrytedPassword,
        userId
    });
}

// export function decryptWiFi(wiFi: Wifi[]) {
//     const cryptr = new Cryptr(process.env.CRYPTR_KEY);

//     return wiFi.map(wifi => {
//         const decryptedPassword = cryptr.decrypt(wifi.password);
//         return { ...wifi, password: decryptedPassword };
//     });
// }

// export async function getDecryptedWiFi(entity: string, userId: number) {
//     const wiFi = await getEntities(entity, userId);
//     return decryptWiFi(wiFi);
// }

// export async function eraseUserWiFi(entity: string, id: number) {
//     await deleteEntity(entity, id);
// }