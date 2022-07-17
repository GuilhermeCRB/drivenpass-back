import Cryptr from "cryptr";
import { Response } from "express";
import { Wifi } from "@prisma/client";

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

export function decryptWiFi(wiFi: Wifi[]) {
    const cryptr = new Cryptr(process.env.CRYPTR_KEY);

    return wiFi.map(wifi => {
        const decryptedPassword = cryptr.decrypt(wifi.password);
        return { ...wifi, password: decryptedPassword };
    });
}

export async function getDecryptedWiFi(entity: string, userId: number) {
    const wiFi = await getEntities(entity, userId);
    return decryptWiFi(wiFi);
}

export async function eraseUserWiFi(entity: string, id: number) {
    await deleteEntity(entity, id);
}